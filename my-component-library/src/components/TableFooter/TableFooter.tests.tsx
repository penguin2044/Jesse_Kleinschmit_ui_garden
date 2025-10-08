import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableFooter } from './TableFooter';

describe('TableFooter Component', () => {
  
  test('renders table footer and is visible', () => {
    render(
      <table>
        <TableFooter>
          <tr>
            <td>Test Footer</td>
          </tr>
        </TableFooter>
      </table>
    );
    
    const footerElement = screen.getByTestId('table-footer');
    expect(footerElement).toBeVisible();
  });

  test('changes style when disabled', () => {
    render(
      <table>
        <TableFooter disabled={true}>
          <tr>
            <td>Test</td>
          </tr>
        </TableFooter>
      </table>
    );
    
    const footerElement = screen.getByTestId('table-footer');
    const styles = window.getComputedStyle(footerElement);
    expect(styles.backgroundColor).toBe('rgb(224, 224, 224)');
    expect(styles.opacity).toBe('0.6');
  });
});