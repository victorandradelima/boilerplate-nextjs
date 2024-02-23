import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Example from './page'

describe('<Example />', () => {
  it('should be a H1 on page', () => {
    render(<Example />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })
})
