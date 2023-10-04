import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import ConfessionForm from './Confession';

describe('ConfessionForm Component', () => {
  it('renders the component', () => {
    render(<ConfessionForm />);
    // Use screen queries to assert that the component rendered correctly
    expect(screen.getByText('Confession Form')).toBeInTheDocument();
  });

  

  it('disables submit button when form is invalid', () => {
    render(<ConfessionForm />);
    
    // Submit button should be initially disabled
    expect(screen.getByText('Confess')).toBeDisabled();

    // Fill out the form inputs with invalid values
    fireEvent.change(screen.getByLabelText('Subject Line'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Reason'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Details'), { target: { value: 'Too short' } });

    // Submit button should still be disabled
    expect(screen.getByText('Confess')).toBeDisabled();
  });
});

it('displays validation message for "Details"', () => {
  render(<ConfessionForm />);
  
  // Fill out the form inputs with invalid values for "Details"
  fireEvent.change(screen.getByLabelText('Details'), { target: { value: 'Short' } });

  // Find the validation message element
  const validationMessage = screen.getByText('Details must be at least 10 characters.');

  // Ensure that the validation message is displayed
  expect(validationMessage).toBeInTheDocument();
});
