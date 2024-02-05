import {render, screen} from '@testing-library/react'
import App from '../src/App'

test('rendes landing page', () => {
    render(<App/>);
    expect(screen.getByText('Brava')).toHaveTextContent('Brava')
})