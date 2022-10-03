import Home from '@pages/index'
import { render } from '@testing-library/react'

describe('Home page', () => {
  it('should render headline', () => {
    const { getByTestId } = render(<Home />)
    const mainHeading = getByTestId('home-title')
    expect(mainHeading).toBeInTheDocument()
  })

  it('should render description', () => {
    const { getByTestId } = render(<Home />)
    const description = getByTestId('home-description')
    expect(description).toBeInTheDocument()
  })

  it('should render characters link', () => {
    const { getByTestId } = render(<Home />)
    const charactersLink = getByTestId('home-link-characters').closest('a')
    expect(charactersLink).toHaveAttribute('href', `/characters`)
  })

  it('should render locations link', () => {
    const { getByTestId } = render(<Home />)
    const charactersLink = getByTestId('home-link-locations').closest('a')
    expect(charactersLink).toHaveAttribute('href', `/locations`)
  })
})
