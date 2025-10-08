import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
  
  // TEST 1: Component is visible
  test('renders radio button and is visible', () => {
    render(
      <RadioButton 
        label="Test Radio"
        value="test"
        name="test-group"
      />
    );
    
    const containerElement = screen.getByTestId('radio-container');
    expect(containerElement).toBeVisible();
    
    const inputElement = screen.getByTestId('radio-input');
    expect(inputElement).toBeVisible();
    expect(inputElement).toHaveAttribute('type', 'radio');
    expect(inputElement).toHaveAttribute('value', 'test');
    
    const labelElement = screen.getByTestId('radio-label');
    expect(labelElement).toHaveTextContent('Test Radio');
  });

  // TEST 2: Background color changes when disabled
  test('changes style when disabled', () => {
    render(
      <RadioButton 
        label="Disabled Radio"
        value="disabled"
        name="disabled-group"
        disabled={true}
      />
    );
    
    const containerElement = screen.getByTestId('radio-container');
    const inputElement = screen.getByTestId('radio-input');
    
    // Check it's disabled
    expect(inputElement).toBeDisabled();
    
    // Check background color changed
    const styles = window.getComputedStyle(containerElement);
    expect(styles.backgroundColor).toBe('rgb(240, 240, 240)'); // #f0f0f0
    expect(styles.cursor).toBe('not-allowed');
    expect(styles.opacity).toBe('0.6');
  });
  
  // BONUS TEST: Checked state works
  test('renders as checked when checked prop is true', () => {
    render(
      <RadioButton 
        label="Checked Radio"
        value="checked"
        name="checked-group"
        checked={true}
      />
    );
    
    const inputElement = screen.getByTestId('radio-input') as HTMLInputElement;
    expect(inputElement.checked).toBe(true);
  });
  
  // BONUS TEST: onChange callback works
  test('calls onChange when clicked', () => {
    const handleChange = jest.fn();
    
    render(
      <RadioButton 
        label="Clickable Radio"
        value="click"
        name="click-group"
        onChange={handleChange}
      />
    );
    
    const containerElement = screen.getByTestId('radio-container');
    containerElement.click();
    
    expect(handleChange).toHaveBeenCalledWith('click');
  });
  
  // BONUS TEST: Disabled radio doesn't call onChange
  test('does not call onChange when disabled', () => {
    const handleChange = jest.fn();
    
    render(
      <RadioButton 
        label="Disabled Radio"
        value="disabled"
        name="disabled-group"
        disabled={true}
        onChange={handleChange}
      />
    );
    
    const containerElement = screen.getByTestId('radio-container');
    containerElement.click();
    
    expect(handleChange).not.toHaveBeenCalled();
  });
});