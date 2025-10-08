import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableCell } from './TableCell';

describe('TableCell Component', () => {
  
  test('renders table cell and is visible', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Test Cell</TableCell>
          </tr>
        </tbody>
      </table>
    );
    
    const cellElement = screen.getByTestId('table-cell');
    expect(cellElement).toBeVisible();
    expect(cellElement).toHaveTextContent('Test Cell');
  });

  test('changes style when disabled', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell disabled={true}>Disabled</TableCell>
          </tr>
        </tbody>
      </table>
    );
    
    const cellElement = screen.getByTestId('table-cell');
    const styles = window.getComputedStyle(cellElement);
    expect(styles.backgroundColor).toBe('rgb(245, 245, 245)');
    expect(styles.opacity).toBe('0.6');
  });

  test('renders as th when isHeader is true', () => {
    render(
      <table>
        <thead>
          <tr>
            <TableCell isHeader>Header</TableCell>
          </tr>
        </thead>
      </table>
    );
    
    const cellElement = screen.getByTestId('table-cell');
    expect(cellElement.tagName).toBe('TH');
  });

  test('renders as td when isHeader is false', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Cell</TableCell>
          </tr>
        </tbody>
      </table>
    );
    
    const cellElement = screen.getByTestId('table-cell');
    expect(cellElement.tagName).toBe('TD');
  });
});