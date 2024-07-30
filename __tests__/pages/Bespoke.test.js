import React from 'react';
import { render, screen } from '@testing-library/react';
import Bespoke from '../../app/bespoke/page';
import '@testing-library/jest-dom';

describe('Home Page', () => {
  it('renders the Navbar component correctly', () => {
    
    render(<Bespoke />)

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders the images', () => {
    render(<Bespoke />);

    const imageItems = screen.getAllByAltText(/Bespoke 1|Bespoke 2|Bespoke 3|Bespoke 4/i);

    expect(imageItems).toHaveLength(4);
  });

  it('renders the text elements ok', () => {
    render(<Bespoke />);

    const lorem = screen.getAllByText(/lorem/i);

    expect(lorem).toHaveLength(3);
  });

  it('renders the footer ok', () => {
    render(<Bespoke />);

    expect(screen.getByText(/© Wyfe 2024/i)).toBeInTheDocument();
  })
});
