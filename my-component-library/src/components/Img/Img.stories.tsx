import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { 
      control: 'color',
    },
    borderColor: {
      control: 'color',
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    borderRadius: {
      control: 'text',
    },
    objectFit: {
      control: { type: 'select' },
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

// DEFAULT STATE
export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    alt: 'Mountain landscape',
    width: '300px',
    height: '200px',
    disabled: false,
  },
};

// DISABLED STATE
export const Disabled: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    alt: 'Disabled image',
    width: '300px',
    height: '200px',
    disabled: true,
  },
};

// ROUNDED CORNERS
export const Rounded: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400',
    alt: 'Nature with rounded corners',
    width: '300px',
    height: '200px',
    borderRadius: '16px',
  },
};

// CIRCULAR
export const Circle: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
    alt: 'Circular image',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
};

// WITH BORDER
export const WithBorder: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400',
    alt: 'Image with border',
    width: '300px',
    height: '200px',
    borderColor: '#007bff',
    borderRadius: '8px',
  },
};

// OBJECT FIT: CONTAIN
export const ContainFit: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400',
    alt: 'Image with contain fit',
    width: '300px',
    height: '300px',
    objectFit: 'contain',
    backgroundColor: '#f0f0f0',
  },
};

// SMALL THUMBNAIL
export const Thumbnail: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200',
    alt: 'Small thumbnail',
    width: '100px',
    height: '100px',
    borderRadius: '8px',
  },
};

// LARGE IMAGE
export const Large: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    alt: 'Large image',
    width: '600px',
    height: '400px',
    borderRadius: '12px',
  },
};