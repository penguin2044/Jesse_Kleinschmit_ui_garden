import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  border: 2px solid ${props => props.borderColor || '#e0e0e0'};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: ${props => props.width || '300px'};
  
  /* Disabled styling */
  background-color: ${props => 
    props.disabled 
      ? '#f5f5f5' 
      : props.backgroundColor || '#ffffff'
  };
  
  cursor: ${props => props.disabled ? 'not-allowed' : 'default'};
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  /* Hover effect (only when not disabled) */
  &:hover {
    ${props => !props.disabled && `
      transform: translateY(-4px);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    `}
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    width: ${props => props.width || '100%'};
    max-width: 350px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  
  @media (max-width: 768px) {
    height: 150px;
  }
`;

const CardContent = styled.div<{ disabled?: boolean; color?: string }>`
  padding: 20px;
  
  color: ${props => 
    props.disabled 
      ? '#999999' 
      : props.color || '#333333'
  };
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Arial', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

const CardDescription = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  font-family: 'Arial', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  backgroundColor,
  color,
  disabled = false,
  width,
  borderColor,
}) => {
  return (
    <StyledCard
      title={title}
      description={description}
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
      width={width}
      borderColor={borderColor}
      data-testid="card"
    >
      {imageSrc && (
        <CardImage 
          src={imageSrc} 
          alt={imageAlt || title}
          data-testid="card-image"
        />
      )}
      <CardContent disabled={disabled} color={color}>
        <CardTitle data-testid="card-title">
          {title}
        </CardTitle>
        <CardDescription data-testid="card-description">
          {description}
        </CardDescription>
      </CardContent>
    </StyledCard>
  );
};