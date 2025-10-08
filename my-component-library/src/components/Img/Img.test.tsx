import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Img } from './Img';

describe('Img Component', () => {
  
  // TEST 1: Component is visible
  test('renders image and is visible', () => {
    render(
      <Img 
        src="https://example.com/image.jpg"
        alt="Test Image"
      />
    );
    
    const imgElement = screen.getByTestId('img');
    expect(imgElement).toBeVisible();
    expect(imgElement).toHaveAttribute('src', 'https://example.com/image.jpg');
    expect(imgElement).toHaveAttribute('alt', 'Test Image');
  });

  // TEST 2: Background color changes when disabled
  test('changes style when disabled', () => {
    render(
      <Img 
        src="https://example.com/image.jpg"
        alt="Disabled Image"
        disabled={true}
      />
    );
    
    const imgElement = screen.getByTestId('img');
    
    // Check background color is grey
    const styles = window.getComputedStyle(imgElement);
    expect(styles.backgroundColor).toBe('rgb(224, 224, 224)'); // #e0e0e0
    expect(styles.cursor).toBe('not-allowed');
    expect(styles.opacity).toBe('0.5');
    expect(styles.filter).toContain('grayscale');
  });
  
});