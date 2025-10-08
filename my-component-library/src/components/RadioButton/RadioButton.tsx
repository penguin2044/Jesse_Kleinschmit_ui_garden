import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

// Container for radio + label
const RadioContainer = styled.div<{
  backgroundColor?: string;
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 6px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  
  background-color: ${props => 
    props.disabled 
      ? '#f0f0f0' 
      : props.backgroundColor || 'transparent'
  };
  
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  /* Hover effect */
  &:hover {
    ${props => !props.disabled && `
      background-color: ${props.backgroundColor || '#f5f5f5'};
    `}
  }
  
  @media (max-width: 768px) {
    padding: 8px 10px;
  }
`;

// The actual radio input
const StyledRadioInput = styled.input<{
  accentColor?: string;
  disabled?: boolean;
}>`
  width: 18px;
  height: 18px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  accent-color: ${props => 
    props.disabled 
      ? '#cccccc' 
      : props.accentColor || '#007bff'
  };
  
  /* Remove default margins */
  margin: 0;
  
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

// The label text
const RadioLabel = styled.label<{
  color?: string;
  disabled?: boolean;
}>`
  font-family: 'Arial', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  user-select: none;
  
  color: ${props => 
    props.disabled 
      ? '#999999' 
      : props.color || '#333333'
  };
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  name,
  checked = false,
  backgroundColor,
  color,
  accentColor,
  disabled = false,
  onChange,
}) => {
  
  // Generate unique ID for accessibility
  const radioId = `radio-${name}-${value}`;
  
  // Handle change event
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };
  
  return (
    <RadioContainer
      backgroundColor={backgroundColor}
      disabled={disabled}
      data-testid="radio-container"
      onClick={handleChange}
    >
      <StyledRadioInput
        type="radio"
        id={radioId}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        accentColor={accentColor}
        onChange={handleChange}
        data-testid="radio-input"
      />
      <RadioLabel
        htmlFor={radioId}
        color={color}
        disabled={disabled}
        data-testid="radio-label"
      >
        {label}
      </RadioLabel>
    </RadioContainer>
  );
};