import { render, screen } from '@testing-library/react';
import Register from './Register';

test('renders button with correct label', () => {
	render(<Register label="Click me" />);
	const buttonElement = screen.getByText(/click me/i);
	expect(buttonElement).toBeInTheDocument();
});
