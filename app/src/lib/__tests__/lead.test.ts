import { describe, it, expect } from 'vitest'
import { LEADS_DEPRECATED } from '../lead'

describe('lead helpers removed', () => {
  it('signal that lead helpers are deprecated', () => {
    expect(LEADS_DEPRECATED).toBe(true)
  })
})
