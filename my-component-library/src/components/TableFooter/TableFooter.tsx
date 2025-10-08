import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledTableFooter = styled.tfoot<{
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
}>`
  background-color: ${props => 
    props.disabled 
      ? '#e0e0e0' 
      : props.backgroundColor || '#f8f9fa'
  };
  
  color: ${props => 
    props.disabled 
      ? '#999999' 
      : props.color || '#212529'
  };
  
  font-weight: 600;
  border-top: 2px solid #dee2e6;
  
  opacity: ${props => props.disabled ? 0.6 : 1};
`;

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  backgroundColor,
  color,
  disabled = false,
}) => {
  return (
    <StyledTableFooter
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
      data-testid="table-footer"
    >
      {children}
    </StyledTableFooter>
  );
};