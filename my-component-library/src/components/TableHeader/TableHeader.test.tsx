import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableHeader } from './TableHeader';

describe('TableHeader Component', () => {
  
  test('renders table header and is visible', () => {
    render(
      <table>
        <TableHeader>
          <tr>
            <th>Test Header</th>
          </tr>
        </TableHeader>
      </table>
    );
    
    const headerElement = screen.getByTestId('table-header');
    expect(headerElement).toBeVisible();
  });

  test('changes style when disabled', () => {
    render(
      <table>
        <TableHeader disabled={true}>
          <tr>
            <th>Test</th>
          </tr>
        </TableHeader>
      </table>
    );
    
    const headerElement = screen.getByTestId('table-header');
    const styles = window.getComputedStyle(headerElement);
    expect(styles.backgroundColor).toBe('rgb(224, 224, 224)');
    expect(styles.opacity).toBe('0.6');
  });
});