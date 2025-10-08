import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { 
      control: 'color',
    },
    color: { 
      control: 'color',
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    selectedValue: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

// Sample options for all stories
const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

// DEFAULT STATE
export const Default: Story = {
  args: {
    options: sampleOptions,
    label: 'Select an option',
    placeholder: 'Choose one...',
    disabled: false,
  },
};

// DISABLED STATE
export const Disabled: Story = {
  args: {
    options: sampleOptions,
    label: 'Disabled Dropdown',
    placeholder: 'Cannot select',
    disabled: true,
  },
};

// WITH SELECTED VALUE
export const WithSelectedValue: Story = {
  args: {
    options: sampleOptions,
    label: 'Pre-selected Dropdown',
    selectedValue: 'option2',
  },
};

// NO LABEL
export const NoLabel: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Select...',
  },
};

// CUSTOM COLORS
export const CustomColors: Story = {
  args: {
    options: sampleOptions,
    label: 'Colorful Dropdown',
    backgroundColor: '#e8f5e9',
    color: '#2e7d32',
  },
};

// FRUIT OPTIONS (different data)
export const FruitSelector: Story = {
  args: {
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
      { value: 'grape', label: 'Grape' },
    ],
    label: 'Choose a fruit',
    placeholder: 'Select your favorite fruit',
  },
};
