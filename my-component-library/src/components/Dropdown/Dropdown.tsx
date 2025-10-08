import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 250px;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

// The label above the dropdown
const DropdownLabel = styled.label<{ disabled?: boolean; color?: string }>`
  font-family: 'Arial', sans-serif;
  font-size: 14px;
  font-weight: 500;
  
  color: ${props => 
    props.disabled 
      ? '#999999' 
      : props.color || '#333333'
  };
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

// The actual select element
const StyledSelect = styled.select<{
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
}>`
  font-family: 'Arial', sans-serif;
  font-size: 14px;
  padding: 10px 12px;
  border: 2px solid ${props => props.disabled ? '#cccccc' : '#ddd'};
  border-radius: 6px;
  outline: none;
  transition: all 0.3s ease;
  
  /* Colors */
  background-color: ${props => 
    props.disabled 
      ? '#f0f0f0' 
      : props.backgroundColor || '#ffffff'
  };
  
  color: ${props => 
    props.disabled 
      ? '#888888' 
      : props.color || '#333333'
  };
  
  /* Cursor */
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  /* Opacity for disabled */
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  /* Focus state (only when not disabled) */
  &:focus {
    ${props => !props.disabled && `
      border-color: #007bff;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    `}
  }
  
  /* Hover effect */
  &:hover {
    ${props => !props.disabled && `
      border-color: #999;
    `}
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 9px 10px;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  label,
  selectedValue,
  placeholder = 'Select an option',
  backgroundColor,
  color,
  disabled = false,
  onChange,
}) => {
  
  // Handle selection change
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!disabled && onChange) {
      onChange(event.target.value);
    }
  };
  
  return (
    <DropdownContainer data-testid="dropdown-container">
      {label && (
        <DropdownLabel 
          disabled={disabled} 
          color={color}
          data-testid="dropdown-label"
        >
          {label}
        </DropdownLabel>
      )}
      
      <StyledSelect
        backgroundColor={backgroundColor}
        color={color}
        disabled={disabled}
        value={selectedValue || ''}
        onChange={handleChange}
        data-testid="dropdown"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        
        {options.map((option) => (
          <option 
            key={option.value} 
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </DropdownContainer>
  );
};