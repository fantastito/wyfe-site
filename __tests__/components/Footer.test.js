import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../../components/Footer/index';

describe('Footer Component', () => {
  test('renders without crashing', () => {
    render(<Footer />);
    expect(screen.getByText(/privacy/i)).toBeInTheDocument();
  });

});
