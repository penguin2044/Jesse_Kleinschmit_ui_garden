import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{
  width?: string;
  height?: string;
  borderRadius?: string;
  objectFit?: string;
  backgroundColor?: string;
  borderColor?: string;
  disabled?: boolean;
}>`
  display: block;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  border-radius: ${props => props.borderRadius || '0'};
  object-fit: ${props => props.objectFit || 'cover'};
  transition: all 0.3s ease;
  
  /* Background color (shows if image fails to load) */
  background-color: ${props => 
    props.disabled 
      ? '#e0e0e0' 
      : props.backgroundColor || 'transparent'
  };
  
  /* Border */
  border: ${props => 
    props.borderColor 
      ? `2px solid ${props.borderColor}` 
      : 'none'
  };
  
  /* Disabled state */
  cursor: ${props => props.disabled ? 'not-allowed' : 'default'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  filter: ${props => props.disabled ? 'grayscale(100%)' : 'none'};
  
  /* Hover effect (only when not disabled) */
  &:hover {
    ${props => !props.disabled && `
      transform: scale(1.02);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    `}
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }
`;
export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  borderRadius,
  objectFit,
  backgroundColor,
  borderColor,
  disabled = false,
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      width={width}
      height={height}
      borderRadius={borderRadius}
      objectFit={objectFit}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      disabled={disabled}
      data-testid="img"
    />
  );
};