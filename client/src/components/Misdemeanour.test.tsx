import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Misdemeanour from './Misdemeanour';



describe('Misdemeanour Component', () => {
  it('renders the component', async () => {
    render(<Misdemeanour />);
    expect(screen.getByText('Misdemeanours Page')).toBeInTheDocument();
  });

  it('displays all misdemeanours by default', async () => {
    render(<Misdemeanour />);
    expect(screen.getByText('Mild Public Rudeness')).toBeInTheDocument();
    expect(screen.getByText('Speaking in a Lift')).toBeInTheDocument();
  });

  
  it('displays "All" option in the filter dropdown', async () => {
    render(<Misdemeanour />);
    // Check if the "All" option is present in the dropdown
    expect(screen.getByText('All')).toBeInTheDocument();
  });

 });

 it('filters misdemeanours for "rudeness" option', async () => {
    render(<Misdemeanour />);
    const select = screen.getByRole('combobox') as HTMLSelectElement;
  
    console.log('Selected filter:', select.value);
  
    fireEvent.change(select, { target: { value: 'rudeness' } });
   // Check if only misdemeanours matching the selected filter are displayed
    expect(screen.getByText('Mild Public Rudeness')).toBeInTheDocument();
 });

 
 it('filters misdemeanours for "lift" option', async () => {
    render(<Misdemeanour />);
    const select = screen.getByRole('combobox') as HTMLSelectElement;
    console.log('Selected filter:', select.value);
    fireEvent.change(select, { target: { value: 'lift' } });
    // Check if only misdemeanours matching the selected filter are displayed
    expect(screen.getByText('Speaking in a Lift')).toBeInTheDocument();
  });
  
  it('filters misdemeanours for "vegetables" option', async () => {
    render(<Misdemeanour />);
    const select = screen.getByRole('combobox') as HTMLSelectElement;
    console.log('Selected filter:', select.value);
    fireEvent.change(select, { target: { value: 'vegetables' } });
    expect(screen.getByText('Not Eating Your Vegetables')).toBeInTheDocument();
  });
   
 
  