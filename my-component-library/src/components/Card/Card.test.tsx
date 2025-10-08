import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

describe('Card Component', () => {
  
  // TEST 1: Component is visible
  test('renders card and is visible', () => {
    render(
      <Card 
        title="Test Card" 
        description="Test description"
      />
    );
    
    const cardElement = screen.getByTestId('card');
    expect(cardElement).toBeVisible();
    
    const titleElement = screen.getByTestId('card-title');
    expect(titleElement).toHaveTextContent('Test Card');
    
    const descElement = screen.getByTestId('card-description');
    expect(descElement).toHaveTextContent('Test description');
  });

  // TEST 2: Background color changes when disabled
  test('changes style when disabled', () => {
    render(
      <Card 
        title="Disabled Card" 
        description="Disabled description"
        disabled={true}
      />
    );
    
    const cardElement = screen.getByTestId('card');
    
    // Check background color is grey
    const styles = window.getComputedStyle(cardElement);
    expect(styles.backgroundColor).toBe('rgb(245, 245, 245)'); // #f5f5f5
    expect(styles.cursor).toBe('not-allowed');
    expect(styles.opacity).toBe('0.6');
  });
});