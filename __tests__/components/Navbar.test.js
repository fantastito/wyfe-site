import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for matchers like toBeInTheDocument
import Navbar from '../../components/Navbar/index';

describe('Navbar Component', () => {
  test('renders without crashing', () => {
    render(<Navbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('renders 4 text items', () => {
    render(<Navbar />);
    const textItems = screen.getAllByText(/Wyfe|Boutique|Bespoke|About/i);
    expect(textItems).toHaveLength(4);
  });
});
