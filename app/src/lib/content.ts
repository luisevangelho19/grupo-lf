import { readFile } from 'fs/promises'
import { join } from 'path'

const SERVICES_DIR = join(process.cwd(), 'app', 'content', 'services')

function parseFrontmatter(raw: string) {
  // crude frontmatter parser: finds first '---' block and parses key: value lines
  const match = raw.match(/^---\s*([\s\S]*?)\s*---/)
  const fm: Record<string, any> = {}
  if (!match) return { frontmatter: {}, body: raw }

  const body = raw.slice(match[0].length).trim()
  const lines = match[1].split(/\r?\n/)
  for (const line of lines) {
    const m = line.match(/^([a-zA-Z0-9_\-]+)\s*:\s*(?:"([^"]*)"|'([^']*)'|(.*))$/)
    if (m) {
      fm[m[1]] = m[2] ?? m[3] ?? m[4] ?? ''
    }
  }

  return { frontmatter: fm, body }
}

export async function getAllServiceMetadata() {
  try {
    const dir = await import('fs/promises').then((fs) => fs.readdir(SERVICES_DIR))
    const files = dir.filter((f: string) => f.endsWith('.mdx'))
    const list = []
    for (const filename of files) {
      const raw = await readFile(join(SERVICES_DIR, filename), 'utf8')
      const { frontmatter } = parseFrontmatter(raw)
      // Skip draft or unpublished content so deleted/disabled MDX don't generate routes
      const isDraft = frontmatter && (frontmatter.draft === 'true' || frontmatter.published === 'false')
      if (isDraft) continue
      list.push({ ...(frontmatter || {}), filename })
    }
    return list
  } catch (e) {
    return []
  }
}

export async function getServiceBySlug(slug: string) {
  try {
    const fp = join(SERVICES_DIR, `${slug}.mdx`)
    const raw = await readFile(fp, 'utf8')
    const { frontmatter, body } = parseFrontmatter(raw)
    // If explicit draft/unpublished, treat as not found
    const isDraft = frontmatter && (frontmatter.draft === 'true' || frontmatter.published === 'false')
    if (isDraft) return null
    return { frontmatter, body }
  } catch (e) {
    return null
  }
}
