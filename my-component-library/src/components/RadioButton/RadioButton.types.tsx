export interface RadioButtonProps {
  label: string;                    // Text next to the radio button
  value: string;                    // Value of this radio option
  name: string;                     // Group name (radios with same name are grouped)
  checked?: boolean;                // Is this radio selected?
  backgroundColor?: string;         // Background of the container
  color?: string;                   // Text color
  accentColor?: string;            // Color of the radio button itself
  disabled?: boolean;
  onChange?: (value: string) => void;  // Called when selection changes
}