import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
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
    content: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['body', 'heading', 'caption'],
    },
    bold: {
      control: 'boolean',
    },
    italic: {
      control: 'boolean',
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

// DEFAULT STATE
export const Default: Story = {
  args: {
    content: 'This is sample text content.',
    disabled: false,
  },
};

// DISABLED STATE
export const Disabled: Story = {
  args: {
    content: 'This text is disabled.',
    disabled: true,
  },
};

// HEADING VARIANT
export const Heading: Story = {
  args: {
    content: 'This is a heading',
    variant: 'heading',
    size: 'large',
  },
};

// CAPTION VARIANT
export const Caption: Story = {
  args: {
    content: 'This is a small caption text',
    variant: 'caption',
  },
};

// SMALL SIZE
export const Small: Story = {
  args: {
    content: 'Small text size',
    size: 'small',
  },
};

// LARGE SIZE
export const Large: Story = {
  args: {
    content: 'Large text size',
    size: 'large',
  },
};

// BOLD TEXT
export const Bold: Story = {
  args: {
    content: 'This text is bold',
    bold: true,
  },
};

// ITALIC TEXT
export const Italic: Story = {
  args: {
    content: 'This text is italic',
    italic: true,
  },
};

// BOLD AND ITALIC
export const BoldItalic: Story = {
  args: {
    content: 'This text is bold and italic',
    bold: true,
    italic: true,
  },
};

// CENTER ALIGNED
export const CenterAligned: Story = {
  args: {
    content: 'This text is centered',
    align: 'center',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

// RIGHT ALIGNED
export const RightAligned: Story = {
  args: {
    content: 'This text is right-aligned',
    align: 'right',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

// WITH BACKGROUND COLOR
export const WithBackground: Story = {
  args: {
    content: 'Text with custom background and color',
    backgroundColor: '#fff3e0',
    color: '#e65100',
  },
};

// LONG PARAGRAPH
export const Paragraph: Story = {
  args: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
};