import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTableCell = styled.td<{
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  align?: string;
}>`
  padding: 12px 16px;
  text-align: ${props => props.align || 'left'};
  
  background-color: ${props => 
    props.disabled 
      ? '#f5f5f5' 
      : props.backgroundColor || 'transparent'
  };
  
  color: ${props => 
    props.disabled 
      ? '#999999' 
      : props.color || 'inherit'
  };
  
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  @media (max-width: 768px) {
    padding: 10px 12px;
    font-size: 13px;
  }
`;

const StyledTableHeaderCell = styled.th<{
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  align?: string;
}>`
  padding: 12px 16px;
  text-align: ${props => props.align || 'left'};
  font-weight: 600;
  
  background-color: ${props => 
    props.disabled 
      ? '#e0e0e0' 
      : props.backgroundColor || 'transparent'
  };
  
  color: ${props => 
    props.disabled 
      ? '#999999' 
      : props.color || 'inherit'
  };
  
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  @media (max-width: 768px) {
    padding: 10px 12px;
    font-size: 13px;
  }
`;

export const TableCell: React.FC<TableCellProps> = ({
  children,
  isHeader = false,
  backgroundColor,
  color,
  disabled = false,
  align = 'left',
  colSpan,
}) => {
  const cellProps = {
    backgroundColor,
    color,
    disabled,
    align,
    colSpan,
    'data-testid': 'table-cell',
  };

  if (isHeader) {
    return (
      <StyledTableHeaderCell {...cellProps}>
        {children}
      </StyledTableHeaderCell>
    );
  }

  return (
    <StyledTableCell {...cellProps}>
      {children}
    </StyledTableCell>
  );
};