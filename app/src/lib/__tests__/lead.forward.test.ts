import { describe, it, expect } from 'vitest'
import { LEADS_DEPRECATED } from '../lead'

describe('leads (deprecated)', () => {
  it('is deprecated when project uses WhatsApp CTAs only', () => {
    expect(LEADS_DEPRECATED).toBe(true)
  })
})
