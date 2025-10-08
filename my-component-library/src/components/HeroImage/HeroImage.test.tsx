import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroImage } from './HeroImage';

describe('HeroImage Component', () => {
  
  // TEST 1: Component is visible
  test('renders hero image and is visible', () => {
    render(
      <HeroImage 
        src="https://example.com/image.jpg"
        alt="Test Image"
        title="Test Title"
        subtitle="Test Subtitle"
      />
    );
    
    const containerElement = screen.getByTestId('hero-container');
    expect(containerElement).toBeVisible();
    
    const imageElement = screen.getByTestId('hero-image');
    expect(imageElement).toBeVisible();
    expect(imageElement).toHaveAttribute('src', 'https://example.com/image.jpg');
    expect(imageElement).toHaveAttribute('alt', 'Test Image');
    
    const titleElement = screen.getByTestId('hero-title');
    expect(titleElement).toHaveTextContent('Test Title');
    
    const subtitleElement = screen.getByTestId('hero-subtitle');
    expect(subtitleElement).toHaveTextContent('Test Subtitle');
  });

  // TEST 2: Background color changes when disabled
  test('changes style when disabled', () => {
    render(
      <HeroImage 
        src="https://example.com/image.jpg"
        alt="Disabled Image"
        title="Disabled"
        disabled={true}
      />
    );
    
    const containerElement = screen.getByTestId('hero-container');
    
    // Check background color is grey
    const styles = window.getComputedStyle(containerElement);
    expect(styles.backgroundColor).toBe('rgb(224, 224, 224)'); // #e0e0e0
    expect(styles.cursor).toBe('not-allowed');
    expect(styles.opacity).toBe('0.5');
  });
  
  // BONUS TEST: Renders without overlay text
  test('renders without overlay when no title or subtitle', () => {
    render(
      <HeroImage 
        src="https://example.com/image.jpg"
        alt="Image only"
      />
    );
    
    const imageElement = screen.getByTestId('hero-image');
    expect(imageElement).toBeVisible();
    
    const overlayElement = screen.queryByTestId('hero-overlay');
    expect(overlayElement).not.toBeInTheDocument();
  });
  
  // BONUS TEST: Custom height applied
  test('applies custom height', () => {
    render(
      <HeroImage 
        src="https://example.com/image.jpg"
        alt="Custom height"
        height="600px"
      />
    );
    
    const containerElement = screen.getByTestId('hero-container');
    const styles = window.getComputedStyle(containerElement);
    expect(styles.height).toBe('600px');
  });
});