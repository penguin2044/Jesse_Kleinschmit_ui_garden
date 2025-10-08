import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from './Dropdown';

const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('Dropdown Component', () => {
  
  // TEST 1: Component is visible
  test('renders dropdown and is visible', () => {
    render(
      <Dropdown 
        options={sampleOptions}
        label="Test Dropdown"
      />
    );
    
    const dropdownElement = screen.getByTestId('dropdown');
    expect(dropdownElement).toBeVisible();
    
    const labelElement = screen.getByTestId('dropdown-label');
    expect(labelElement).toHaveTextContent('Test Dropdown');
    
    // Check that all options are present
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  // TEST 2: Background color changes when disabled
  test('changes style when disabled', () => {
    render(
      <Dropdown 
        options={sampleOptions}
        label="Disabled Dropdown"
        disabled={true}
      />
    );
    
    const dropdownElement = screen.getByTestId('dropdown');
    
    // Check it's disabled
    expect(dropdownElement).toBeDisabled();
    
    // Check background color changed
    const styles = window.getComputedStyle(dropdownElement);
    expect(styles.backgroundColor).toBe('rgb(240, 240, 240)'); // #f0f0f0
    expect(styles.cursor).toBe('not-allowed');
    expect(styles.opacity).toBe('0.6');
  });
  
});