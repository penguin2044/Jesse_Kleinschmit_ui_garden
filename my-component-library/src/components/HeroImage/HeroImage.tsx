import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

// Main container
const HeroContainer = styled.div<{
  height?: string;
  backgroundColor?: string;
  disabled?: boolean;
}>`
  position: relative;
  width: 100%;
  height: ${props => props.height || '400px'};
  overflow: hidden;
  background-color: ${props => 
    props.disabled 
      ? '#e0e0e0' 
      : props.backgroundColor || '#333333'
  };
  
  cursor: ${props => props.disabled ? 'not-allowed' : 'default'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  
  @media (max-width: 768px) {
    height: ${props => props.height || '300px'};
  }
`;

// The actual image
const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

// Dark overlay for text readability
const Overlay = styled.div<{ overlayOpacity?: number }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, ${props => props.overlayOpacity || 0.4});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

// Text container
const TextContainer = styled.div`
  text-align: center;
  z-index: 1;
`;

// Title text
const HeroTitle = styled.h1<{ color?: string; disabled?: boolean }>`
  font-family: 'Arial', sans-serif;
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: ${props => 
    props.disabled 
      ? '#999999' 
      : props.color || '#ffffff'
  };
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 12px;
  }
`;

// Subtitle text
const HeroSubtitle = styled.p<{ color?: string; disabled?: boolean }>`
  font-family: 'Arial', sans-serif;
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  color: ${props => 
    props.disabled 
      ? '#aaaaaa' 
      : props.color || '#ffffff'
  };
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;


export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  title,
  subtitle,
  height,
  overlayOpacity,
  backgroundColor,
  color,
  disabled = false,
}) => {
  return (
    <HeroContainer
      height={height}
      backgroundColor={backgroundColor}
      disabled={disabled}
      data-testid="hero-container"
    >
      <HeroImg 
        src={src} 
        alt={alt}
        data-testid="hero-image"
      />
      
      {(title || subtitle) && (
        <Overlay 
          overlayOpacity={overlayOpacity}
          data-testid="hero-overlay"
        >
          <TextContainer>
            {title && (
              <HeroTitle 
                color={color} 
                disabled={disabled}
                data-testid="hero-title"
              >
                {title}
              </HeroTitle>
            )}
            {subtitle && (
              <HeroSubtitle 
                color={color} 
                disabled={disabled}
                data-testid="hero-subtitle"
              >
                {subtitle}
              </HeroSubtitle>
            )}
          </TextContainer>
        </Overlay>
      )}
    </HeroContainer>
  );
};