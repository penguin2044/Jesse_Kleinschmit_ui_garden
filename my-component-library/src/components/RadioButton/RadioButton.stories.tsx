import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { RadioButton } from './RadioButton';
import { useState } from 'react';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
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
    accentColor: {
      control: 'color',
    },
    label: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

// DEFAULT STATE
export const Default: Story = {
  args: {
    label: 'Option 1',
    value: 'option1',
    name: 'default-group',
    checked: false,
    disabled: false,
  },
};

// DISABLED STATE
export const Disabled: Story = {
  args: {
    label: 'Disabled Option',
    value: 'disabled',
    name: 'disabled-group',
    disabled: true,
  },
};

// CHECKED
export const Checked: Story = {
  args: {
    label: 'Selected Option',
    value: 'selected',
    name: 'checked-group',
    checked: true,
  },
};

// CUSTOM COLORS
export const CustomColors: Story = {
  args: {
    label: 'Custom Styled',
    value: 'custom',
    name: 'custom-group',
    backgroundColor: '#e8f5e9',
    color: '#2e7d32',
    accentColor: '#4caf50',
    checked: true,
  },
};

// RADIO GROUP EXAMPLE (Interactive!)
export const RadioGroup: Story = {
  render: () => {
    // This creates a working radio button group
    const [selected, setSelected] = useState('option1');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{ margin: '0 0 10px 0', fontFamily: 'Arial' }}>
          Choose your favorite:
        </h3>
        <RadioButton
          label="Pizza"
          value="option1"
          name="food-group"
          checked={selected === 'option1'}
          onChange={setSelected}
        />
        <RadioButton
          label="Burger"
          value="option2"
          name="food-group"
          checked={selected === 'option2'}
          onChange={setSelected}
        />
        <RadioButton
          label="Tacos"
          value="option3"
          name="food-group"
          checked={selected === 'option3'}
          onChange={setSelected}
        />
        <RadioButton
          label="Sushi"
          value="option4"
          name="food-group"
          checked={selected === 'option4'}
          onChange={setSelected}
        />
        <p style={{ marginTop: '10px', fontFamily: 'Arial', color: '#666' }}>
          Selected: {selected}
        </p>
      </div>
    );
  },
};

// DISABLED IN GROUP
export const DisabledInGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('small');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{ margin: '0 0 10px 0', fontFamily: 'Arial' }}>
          Select size:
        </h3>
        <RadioButton
          label="Small"
          value="small"
          name="size-group"
          checked={selected === 'small'}
          onChange={setSelected}
        />
        <RadioButton
          label="Medium (Out of Stock)"
          value="medium"
          name="size-group"
          checked={selected === 'medium'}
          onChange={setSelected}
          disabled={true}
        />
        <RadioButton
          label="Large"
          value="large"
          name="size-group"
          checked={selected === 'large'}
          onChange={setSelected}
        />
      </div>
    );
  },
};