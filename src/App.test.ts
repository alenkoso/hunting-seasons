import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest'
import { render, screen } from '@testing-library/svelte'
import App from './App.svelte'

describe('App', () => {
  beforeAll(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2024-09-26T12:00:00Z'))
  })

  afterAll(() => {
    vi.useRealTimers()
  })

  it('renders the main heading', () => {
    render(App)
    expect(screen.getByRole('heading', { name: /Active Hunting Seasons/i, level: 1 })).toBeInTheDocument()
  })

  it('renders the date picker', () => {
    render(App)
    expect(screen.getByLabelText(/Select Date/i)).toBeInTheDocument()
  })

  it('displays the current date and hunting seasons status', () => {
    render(App)

    // Check for the subheading with the current date
    const dateHeading = screen.getByRole('heading', { name: /Active Hunting Seasons for/i, level: 2 })
    expect(dateHeading).toBeInTheDocument()
    expect(dateHeading.textContent).toMatch(/September 26, 2024/)

    // Check for the hunting seasons status
    const statusElement = screen.getByText(/No active hunting seasons for this date/i)
    expect(statusElement).toBeInTheDocument()
  })
})