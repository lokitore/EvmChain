// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EvmChain title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EvmChain/i);
    expect(titleElement).toBeInTheDocument();
});
