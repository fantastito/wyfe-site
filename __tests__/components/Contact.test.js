import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for matchers like toBeInTheDocument
import Contact from '../../components/Contact/index';

describe('Contact Component', () => {
  test('renders without crashing', () => {
    render(<Contact />);
    expect(screen.getByText(/contact us at/i)).toBeInTheDocument();
  });

});
