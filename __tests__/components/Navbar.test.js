import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { usePathname } from 'next/navigation';

import Navbar from '../../components/Navbar/index';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn()
}));

describe('Navbar Component', () => {
  test('does not display Wyfe when path is homepage', () => {
    usePathname.mockReturnValue("/");
    
    render(<Navbar />);

    expect(screen.queryByText('Wyfe')).not.toBeInTheDocument();
  });

  test('renders 3 text items when path is homepage', () => {
    usePathname.mockReturnValue("/");
    
    render(<Navbar />);

    const textItems = screen.getAllByText(/Dresses|Bespoke|About/i);
    expect(textItems).toHaveLength(3);
  });

  test('renders correctly on non-Homeage page', () => {
    usePathname.mockReturnValue("/dresses");

    render(<Navbar />);

    const textItems = screen.getAllByText(/Wyfe|Dresses|Bespoke|About/i);
    expect(textItems).toHaveLength(4);
  });


});
