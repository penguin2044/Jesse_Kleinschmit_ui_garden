import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from './Text';

describe('Text Component', () => {
  
  // TEST 1: Component is visible
  test('renders text and is visible', () => {
    render(<Text content="Test Text" />);
    
    const textElement = screen.getByTestId('text');
    expect(textElement).toBeVisible();
    expect(textElement).toHaveTextContent('Test Text');
  });

  // TEST 2: Background color changes when disabled
  test('changes style when disabled', () => {
    render(<Text content="Disabled Text" disabled={true} />);
    
    const textElement = screen.getByTestId('text');
    
    // Check background color is grey
    const styles = window.getComputedStyle(textElement);
    expect(styles.backgroundColor).toBe('rgb(245, 245, 245)'); // #f5f5f5
    expect(styles.cursor).toBe('not-allowed');
    expect(styles.opacity).toBe('0.5');
  });
  
  // BONUS TEST: Font weight changes when bold
  test('applies bold font weight when bold is true', () => {
    render(<Text content="Bold Text" bold={true} />);
    
    const textElement = screen.getByTestId('text');
    const styles = window.getComputedStyle(textElement);
    expect(styles.fontWeight).toBe('700');
  });
  
  // BONUS TEST: Font style changes when italic
  test('applies italic style when italic is true', () => {
    render(<Text content="Italic Text" italic={true} />);
    
    const textElement = screen.getByTestId('text');
    const styles = window.getComputedStyle(textElement);
    expect(styles.fontStyle).toBe('italic');
  });
  
  // BONUS TEST: Text alignment works
  test('applies center alignment', () => {
    render(<Text content="Centered" align="center" />);
    
    const textElement = screen.getByTestId('text');
    const styles = window.getComputedStyle(textElement);
    expect(styles.textAlign).toBe('center');
  });
});