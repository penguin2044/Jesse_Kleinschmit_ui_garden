import React from 'react';
import styled from 'styled-components';
import {ButtonProps} from './Button.types';

const StyledButton = styled.button<ButtonProps>`
/* basic styling -----------------------------------------------*/
font-family: 'Arial', sans-serif;
border: none;
border-radius: 8px;
font-weight: 600;
transition: all 0.3s ease;

/* Disabled Logic ----------------------------------------------*/
cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

background-color: ${props => 
    props.disabled ? '#cccccc'
    : props.backgroundColor || '#007bff'
};

color: ${props => 
    props.disabled 
    ? '#666666'
    : props.color || '#ffffff'
};

opacity: ${props => props.disabled ? 0.6 : 1};

/* Size variations ----------------------------------------------*/
padding: ${props => {
    if (props.size === 'small') return '8px 16px';
    if (props.size === 'large') return '16px 32px';
    return '12px 24px';
}};

font-size: ${props => {
    if (props.size === 'small') return '12px';
    if (props.size === 'large') return '18px';
    return '14px';
}};

@media (max-width: 768px){
    padding: ${props => {
        if (props.size === 'small') return '6px 12px';
        if (props.size === 'large') return '12px 24px';
        return '10px 20px';
    }};

    font-size: ${props => {
        if (props.size === 'small') return '11px';
        if (props.size === 'large') return '16px';
        return '13px';
    }}
}
`;
export const Button: React.FC<ButtonProps> = ({
    label,
    backgroundColor,
    color,
    disabled = false,
    onClick,
    size = 'medium'
}) => {
    return <StyledButton 
            type="button"
            label={label}
            backgroundColor={backgroundColor}
            color={color}
            disabled={disabled}
            onClick={onClick}
            size={size}
            data-testid = "button"
        >
            {label}
        </StyledButton>
}
