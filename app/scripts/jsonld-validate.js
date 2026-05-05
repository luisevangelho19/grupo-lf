const { readFileSync, readdirSync } = require('fs')
const { join } = require('path')

const layoutFile = join(process.cwd(), 'src', 'app', 'layout.tsx')
const contentDir = join(process.cwd(), 'content', 'services')

function fail(msg) {
  console.error('JSON-LD VALIDATION FAILED:', msg)
  process.exit(2)
}

try {
  const layout = readFileSync(layoutFile, 'utf8')
  if (!layout.includes('@context') || !layout.includes('LocalBusiness')) {
    fail('layout.tsx não contém JSON-LD LocalBusiness esperado')
  }

  const files = readdirSync(contentDir).filter((f) => f.endsWith('.mdx'))
  if (files.length === 0) fail('Nenhum arquivo MDX encontrado em content/services')

  for (const f of files) {
    const raw = readFileSync(join(contentDir, f), 'utf8')
    if (!raw.includes('slug:')) fail(`${f} não parece ter frontmatter 'slug'`)
  }

  console.log('JSON-LD smoke validation OK')
} catch (e) {
  console.error(e)
  process.exit(2)
}
