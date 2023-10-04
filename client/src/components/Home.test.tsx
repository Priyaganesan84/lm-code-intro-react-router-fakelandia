import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home component with expected text', () => {
  // Render the Home component
  render(<Home />);
  
  // Check if the expected text is present in the rendered output
  const titleElement = screen.getByText('Welcome to the home of the Justice Department of Fakelandia');
  const descriptionElement = screen.getByText('Here you can browse a list of recent misdemeanours committed by our citizens, or you can confess to your own misdemeanour.');
  
  // Assert that the expected text elements are present
  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});
