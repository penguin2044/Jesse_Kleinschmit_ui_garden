export interface TableCellProps {
  children: React.ReactNode;
  isHeader?: boolean;           // Render as <th> instead of <td>
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  align?: 'left' | 'center' | 'right';
  colSpan?: number;             // Span multiple columns
}