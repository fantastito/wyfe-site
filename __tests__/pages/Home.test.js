import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../app/page'; // Adjust the import based on your folder structure
import '@testing-library/jest-dom';

describe('Home Page', () => {
  it('renders the Navbar component', () => {
    render(<Home />);
    // Check if the Navbar is in the document
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders the logo with correct attributes', () => {
    render(<Home />);

    const logo = screen.getByAltText('Wyfe Logo');
    expect(logo).toBeInTheDocument();
  });

  // it('renders the Contact component', () => {
  //   render(<Home />);
    
  //   expect(screen.getByText(/stranger/i)).toBeInTheDocument();
  // });

  it('renders the background image renders', () => {
    render(<Home />);
    
    const backgroundImage = screen.getByAltText('Background Image');
    expect(backgroundImage).toBeInTheDocument();
  });
});
