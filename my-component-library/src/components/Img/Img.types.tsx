export interface ImgProps {
  src: string;                           
  alt: string;                           
  width?: string;                       
  height?: string;                       
  borderRadius?: string;                 
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  backgroundColor?: string;             
  borderColor?: string;                  
  disabled?: boolean;
}