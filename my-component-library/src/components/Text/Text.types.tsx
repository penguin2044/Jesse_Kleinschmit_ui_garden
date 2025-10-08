export interface TextProps {
  content: string;                    // The text to display
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'body' | 'heading' | 'caption';
  bold?: boolean;
  italic?: boolean;
  align?: 'left' | 'center' | 'right';
}