import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableRow } from './TableRow';

describe('TableRow Component', () => {
  
  test('renders table row and is visible', () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Test</td>
          </TableRow>
        </tbody>
      </table>
    );
    
    const rowElement = screen.getByTestId('table-row');
    expect(rowElement).toBeVisible();
  });

  test('changes style when disabled', () => {
    render(
      <table>
        <tbody>
          <TableRow disabled={true}>
            <td>Test</td>
          </TableRow>
        </tbody>
      </table>
    );
    
    const rowElement = screen.getByTestId('table-row');
    const styles = window.getComputedStyle(rowElement);
    expect(styles.backgroundColor).toBe('rgb(245, 245, 245)');
    expect(styles.cursor).toBe('not-allowed');
    expect(styles.opacity).toBe('0.6');
  });
});