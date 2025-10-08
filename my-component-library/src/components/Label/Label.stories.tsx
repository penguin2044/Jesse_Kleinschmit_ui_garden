import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
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
    text: {
      control: 'text',
    },
    htmlFor: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    bold: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

// DEFAULT STATE
export const Default: Story = {
  args: {
    text: 'Label Text',
    disabled: false,
  },
};

// DISABLED STATE
export const Disabled: Story = {
  args: {
    text: 'Disabled Label',
    disabled: true,
  },
};

// SMALL SIZE
export const Small: Story = {
  args: {
    text: 'Small Label',
    size: 'small',
  },
};

// LARGE SIZE
export const Large: Story = {
  args: {
    text: 'Large Label',
    size: 'large',
  },
};

// BOLD
export const Bold: Story = {
  args: {
    text: 'Bold Label',
    bold: true,
  },
};

// WITH BACKGROUND COLOR
export const WithBackground: Story = {
  args: {
    text: 'Colored Label',
    backgroundColor: '#e3f2fd',
    color: '#1976d2',
  },
};

// FORM LABEL EXAMPLE
export const FormLabel: Story = {
  args: {
    text: 'Email Address',
    htmlFor: 'email-input',
    bold: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Label {...args} />
      <input 
        id="email-input" 
        type="email" 
        placeholder="Enter your email"
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
    </div>
  ),
};

// REQUIRED FIELD
export const RequiredField: Story = {
  args: {
    text: 'Password *',
    htmlFor: 'password-input',
    color: '#d32f2f',
    bold: true,
  },
};