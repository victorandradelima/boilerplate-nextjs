import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Button } from '../button'

describe('<Button />', () => {
  it('should be a button tag', () => {
    render(<Button />)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })

  // Este é um teste usando Snapshot
  it('should be imutable button component', () => {
    const { container } = render(<Button />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
