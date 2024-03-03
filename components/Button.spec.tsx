import { render, screen } from '@testing-library/react'
import Button from './Button'

it('should render button component', async () => {
  render(<Button />)

  expect(await screen.findByText('Increment')).toBeDefined()
})
