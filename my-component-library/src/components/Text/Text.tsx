import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  size?: string;
  variant?: string;
  bold?: boolean;
  italic?: boolean;
  align?: string;
}>`
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 8px;
  transition: all 0.3s ease;
  
  /* Font size based on variant and size */
  font-size: ${props => {
    if (props.variant === 'heading') {
      if (props.size === 'small') return '20px';
      if (props.size === 'large') return '32px';
      return '24px';
    }
    if (props.variant === 'caption') {
      if (props.size === 'small') return '10px';
      if (props.size === 'large') return '14px';
      return '12px';
    }
    // body (default)
    if (props.size === 'small') return '12px';
    if (props.size === 'large') return '18px';
    return '14px';
  }};
  
  /* Font weight */
  font-weight: ${props => {
    if (props.bold) return '700';
    if (props.variant === 'heading') return '700';
    if (props.variant === 'caption') return '400';
    return '500';
  }};
  
  /* Font style */
  font-style: ${props => props.italic ? 'italic' : 'normal'};
  
  /* Text alignment */
  text-align: ${props => props.align || 'left'};
  
  /* Line height for readability */
  line-height: ${props => props.variant === 'caption' ? '1.4' : '1.6'};
  
  /* Background color */
  background-color: ${props => 
    props.disabled 
      ? '#f5f5f5' 
      : props.backgroundColor || 'transparent'
  };
  
  /* Text color */
  color: ${props => 
    props.disabled 
      ? '#aaaaaa' 
      : props.color || '#000000'
  };
  
  /* Opacity for disabled */
  opacity: ${props => props.disabled ? 0.5 : 1};
  
  /* Cursor */
  cursor: ${props => props.disabled ? 'not-allowed' : 'text'};
  
  /* Border radius */
  border-radius: 4px;
  
  /* Responsive */
  @media (max-width: 768px) {
    font-size: ${props => {
      if (props.variant === 'heading') {
        if (props.size === 'small') return '18px';
        if (props.size === 'large') return '28px';
        return '22px';
      }
      if (props.variant === 'caption') {
        if (props.size === 'small') return '9px';
        if (props.size === 'large') return '13px';
        return '11px';
      }
      if (props.size === 'small') return '11px';
      if (props.size === 'large') return '16px';
      return '13px';
    }};
    
    padding: 6px;
  }
`;

export const Text: React.FC<TextProps> = ({
  content,
  backgroundColor,
  color,
  disabled = false,
  size = 'medium',
  variant = 'body',
  bold = false,
  italic = false,
  align = 'left',
}) => {
  return (
    <StyledText
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
      bold={bold}
      italic={italic}
      align={align}
      data-testid="text"
    >
      {content}
    </StyledText>
  );
};