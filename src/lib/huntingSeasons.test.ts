import { describe, it, expect } from 'vitest'
import { getActiveSeasons } from './huntingSeasons'

describe('getActiveSeasons', () => {
  it('returns active seasons for a given date', () => {
    const testDate = new Date('2024-09-15')
    const activeSeasons = getActiveSeasons(testDate)
    
    expect(activeSeasons.length).toBeGreaterThan(0)
    expect(activeSeasons[0].name).toBe('Srna')
    expect(activeSeasons[0].seasons.length).toBe(3)
    expect(activeSeasons[0].seasons[0].type).toBe('srnjak, lanščak')
    expect(activeSeasons[0].seasons[1].type).toBe('srna, mladiči obeh spolov')
    expect(activeSeasons[0].seasons[2].type).toBe('mladica')
  })

  it('returns an empty array when no seasons are active', () => {
    const testDate = new Date('2023-01-01') // Use a date outside of all seasons
    const activeSeasons = getActiveSeasons(testDate)
    
    expect(activeSeasons.length).toBe(0)
  })
})