import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
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
    borderColor: {
      control: 'color',
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    imageSrc: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    width: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// DEFAULT STATE
export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a description of the card. It provides details about the content.',
    backgroundColor: '#ffffff',
    color: '#333333',
    disabled: false,
  },
};

// DISABLED STATE
export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    description: 'This card is disabled and cannot be interacted with.',
    disabled: true,
  },
};

// WITH IMAGE
export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    description: 'This card includes an image at the top.',
    imageSrc: 'https://via.placeholder.com/300x200',
    imageAlt: 'Placeholder image',
  },
};

// CUSTOM COLORS
export const CustomColors: Story = {
  args: {
    title: 'Colorful Card',
    description: 'This card has custom background and text colors.',
    backgroundColor: '#e3f2fd',
    color: '#1565c0',
    borderColor: '#1976d2',
  },
};

// CUSTOM WIDTH
export const WideCard: Story = {
  args: {
    title: 'Wide Card',
    description: 'This card has a custom width.',
    width: '500px',
  },
};