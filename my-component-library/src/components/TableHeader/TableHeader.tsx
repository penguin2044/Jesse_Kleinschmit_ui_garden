import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledTableHeader = styled.thead<{
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
  text-align: left;
  
  opacity: ${props => props.disabled ? 0.6 : 1};
`;

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  backgroundColor,
  color,
  disabled = false,
}) => {
  return (
    <StyledTableHeader
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
      data-testid="table-header"
    >
      {children}
    </StyledTableHeader>
  );
};