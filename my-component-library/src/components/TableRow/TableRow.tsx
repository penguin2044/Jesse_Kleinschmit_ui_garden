import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledTableRow = styled.tr<{
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
}>`
  border-bottom: 1px solid ${props => props.disabled ? '#e0e0e0' : '#dee2e6'};
  
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
  cursor: ${props => props.disabled ? 'not-allowed' : 'default'};
  
  transition: background-color 0.2s ease;
`;

export const TableRow: React.FC<TableRowProps> = ({
  children,
  backgroundColor,
  color,
  disabled = false,
}) => {
  return (
    <StyledTableRow
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
      data-testid="table-row"
    >
      {children}
    </StyledTableRow>
  );
};