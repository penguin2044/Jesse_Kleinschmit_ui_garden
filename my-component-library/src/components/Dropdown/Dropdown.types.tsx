export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: DropdownOption[];     // List of options
  label?: string;                // Label above dropdown
  selectedValue?: string;        // Currently selected value
  placeholder?: string;          // Placeholder text
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;  // Called when selection changes
}