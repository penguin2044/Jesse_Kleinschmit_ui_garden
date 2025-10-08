import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button Component', () => {
  
  // TEST 1: Component is visible
  test('renders button and is visible', () => {
    render(<Button label="Test Button" />);
    const buttonElement = screen.getByTestId('button');
    
    expect(buttonElement).toBeVisible();
    expect(buttonElement).toHaveTextContent('Test Button');
  });

  // TEST 2: Background color changes when disabled 
  test('changes style when disabled', () => {
    render(<Button label="Disabled" disabled={true} />);
    const buttonElement = screen.getByTestId('button');
    
    // Check it's actually disabled
    expect(buttonElement).toBeDisabled();
    
    // Check background color is grey
    const styles = window.getComputedStyle(buttonElement);
    expect(styles.backgroundColor).toBe('rgb(204, 204, 204)'); // #cccccc in RGB
    
    // Check cursor changed
    expect(styles.cursor).toBe('not-allowed');
  });
});