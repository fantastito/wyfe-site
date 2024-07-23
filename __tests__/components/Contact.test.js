import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../../components/Contact/index';

describe('Contact Component', () => {
  test('renders without crashing', () => {
    render(<Contact />);
    expect(screen.getByText(/stranger/i)).toBeInTheDocument();
  });

});
