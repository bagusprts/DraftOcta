// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DraftOcta title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DraftOcta/i);
    expect(titleElement).toBeInTheDocument();
});
