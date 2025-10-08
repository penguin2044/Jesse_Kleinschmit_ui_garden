import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
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
    disabled: {
      control: 'boolean',  
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
    
};

export default meta;
type Story = StoryObj<typeof Button>;


export const Default: Story = {
  args: {
    label: 'Click Me',
    backgroundColor: '#007bff',
    color: '#ffffff',
    disabled: false,
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'large',
  },
};