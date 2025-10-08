import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from './Table';

describe('Table Component', () => {
  
  // TEST 1: Component is visible
  test('renders table and is visible', () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Test</td>
          </tr>
        </tbody>
      </Table>
    );
    
    const tableElement = screen.getByTestId('table');
    expect(tableElement).toBeVisible();
  });

  // TEST 2: Background color changes when disabled
  test('changes style when disabled', () => {
    render(
      <Table disabled={true}>
        <tbody>
          <tr>
            <td>Test</td>
          </tr>
        </tbody>
      </Table>
    );
    
    const tableElement = screen.getByTestId('table');
    
    const styles = window.getComputedStyle(tableElement);
    expect(styles.backgroundColor).toBe('rgb(245, 245, 245)'); // #f5f5f5
    expect(styles.cursor).toBe('not-allowed');
    expect(styles.opacity).toBe('0.6');
  });
});