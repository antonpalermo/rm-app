import Home from '@pages/index'
import { render } from '@testing-library/react'

describe('Home page', () => {
  it('should render', () => {
    const { getByTestId } = render(<Home />)
    const mainHeading = getByTestId('home-title')
    expect(mainHeading).toBeInTheDocument()
  })
})
