export interface ButtonProps{
    label: string;
    backgroundColor?: string;
    color?: string;
    disabled?: boolean;
    onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
}