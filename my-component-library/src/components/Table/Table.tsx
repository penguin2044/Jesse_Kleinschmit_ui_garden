import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<{
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  disabled?: boolean;
  striped?: boolean;
  hoverable?: boolean;
}>`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Arial', sans-serif;
  
  background-color: ${props => 
    props.disabled 
      ? '#f5f5f5' 
      : props.backgroundColor || '#ffffff'
  };
  
  color: ${props => 
    props.disabled 
      ? '#999999' 
      : props.color || '#333333'
  };
  
  border: 2px solid ${props => 
    props.disabled 
      ? '#cccccc'
      : props.borderColor || '#ddd'
  };
  
  cursor: ${props => props.disabled ? 'not-allowed' : 'default'};
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  /* Striped rows */
  ${props => props.striped && !props.disabled && `
    tbody tr:nth-child(even) {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `}
  
  /* Hoverable rows */
  ${props => props.hoverable && !props.disabled && `
    tbody tr:hover {
      background-color: rgba(0, 123, 255, 0.1);
    }
  `}
  
  /* Responsive */
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Table: React.FC<TableProps> = ({
  children,
  backgroundColor,
  color,
  borderColor,
  disabled = false,
  striped = false,
  hoverable = false,
}) => {
  return (
    <StyledTable
      backgroundColor={backgroundColor}
      color={color}
      borderColor={borderColor}
      disabled={disabled}
      striped={striped}
      hoverable={hoverable}
      data-testid="table"
    >
      {children}
    </StyledTable>
  );
};

