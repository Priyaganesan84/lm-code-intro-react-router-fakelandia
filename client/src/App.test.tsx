import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders App layout', () => {
  render(<App />);
  
  // Check if the main layout elements are present
  const headerElement = screen.getByText('Fakelandia Justice Department');
  const homeLink = screen.getByText('Home');
  const misdemeanoursLink = screen.getByText('Misdemeanours');
  const confessionLink = screen.getByText('Confess to Us');
  
  expect(headerElement).toBeInTheDocument();
  expect(homeLink).toBeInTheDocument();
  expect(misdemeanoursLink).toBeInTheDocument();
  expect(confessionLink).toBeInTheDocument();
});




