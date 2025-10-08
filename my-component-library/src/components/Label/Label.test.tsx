import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from './Label';

describe('Label Component', () => {
  
  // TEST 1: Component is visible
  test('renders label and is visible', () => {
    render(<Label text="Test Label" />);
    
    const labelElement = screen.getByTestId('label');
    expect(labelElement).toBeVisible();
    expect(labelElement).toHaveTextContent('Test Label');
  });

  // TEST 2: Background color changes when disabled
  test('changes style when disabled', () => {
    render(<Label text="Disabled Label" disabled={true} />);
    
    const labelElement = screen.getByTestId('label');
    
    // Check background color is grey
    const styles = window.getComputedStyle(labelElement);
    expect(styles.backgroundColor).toBe('rgb(224, 224, 224)'); // #e0e0e0
    expect(styles.cursor).toBe('not-allowed');
    expect(styles.opacity).toBe('0.6');
  });
});