import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'

describe('MDX evaluate smoke', () => {
  it('evaluates a simple mdx body', async () => {
    const mdx = '# Hello\n\nThis is a test'
    const module = await evaluate(mdx, { ...runtime, baseUrl: import.meta.url })
    expect(typeof module.default).toBe('function')
  })
})
