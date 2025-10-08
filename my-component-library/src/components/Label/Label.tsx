import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  size?: string;
  bold?: boolean;
}>`
  display: inline-block;
  font-family: 'Arial', sans-serif;
  cursor: ${props => props.disabled ? 'not-allowed' : 'default'};
  transition: all 0.3s ease;
  
  /* Font size based on size prop */
  font-size: ${props => {
    if (props.size === 'small') return '12px';
    if (props.size === 'large') return '18px';
    return '14px';  // medium
  }};
  
  /* Font weight */
  font-weight: ${props => props.bold ? '600' : '500'};
  
  /* Padding */
  padding: ${props => {
    if (props.size === 'small') return '4px 8px';
    if (props.size === 'large') return '12px 16px';
    return '8px 12px';  // medium
  }};
  
  /* Background color */
  background-color: ${props => 
    props.disabled 
      ? '#e0e0e0' 
      : props.backgroundColor || 'transparent'
  };
  
  /* Text color */
  color: ${props => 
    props.disabled 
      ? '#999999' 
      : props.color || '#333333'
  };
  
  /* Opacity for disabled */
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  /* Rounded corners */
  border-radius: 4px;
  
  /* Responsive */
  @media (max-width: 768px) {
    font-size: ${props => {
      if (props.size === 'small') return '11px';
      if (props.size === 'large') return '16px';
      return '13px';
    }};
    
    padding: ${props => {
      if (props.size === 'small') return '3px 6px';
      if (props.size === 'large') return '10px 14px';
      return '7px 10px';
    }};
  }
`;

export const Label: React.FC<LabelProps> = ({
  text,
  htmlFor,
  backgroundColor,
  color,
  disabled = false,
  size = 'medium',
  bold = false,
}) => {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
      size={size}
      bold={bold}
      data-testid="label"
    >
      {text}
    </StyledLabel>
  );
};