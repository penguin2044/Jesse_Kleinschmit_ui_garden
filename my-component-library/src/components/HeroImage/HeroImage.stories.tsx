import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { 
      control: 'color',
    },
    color: { 
      control: 'color',
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    overlayOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

// DEFAULT STATE
export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    alt: 'Mountain landscape',
    title: 'Welcome to Our Site',
    subtitle: 'Discover amazing experiences',
    height: '500px',
    overlayOpacity: 0.4,
    disabled: false,
  },
};

// DISABLED STATE
export const Disabled: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    alt: 'Mountain landscape',
    title: 'Disabled Hero',
    subtitle: 'This hero image is disabled',
    disabled: true,
  },
};

// NO OVERLAY TEXT
export const ImageOnly: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200',
    alt: 'Nature scene',
    height: '400px',
  },
};

// LIGHT OVERLAY
export const LightOverlay: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200',
    alt: 'Forest',
    title: 'Light Overlay',
    subtitle: 'Subtle dark overlay',
    overlayOpacity: 0.2,
  },
};

// DARK OVERLAY
export const DarkOverlay: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200',
    alt: 'Ocean',
    title: 'Dark Overlay',
    subtitle: 'Strong dark overlay for better text readability',
    overlayOpacity: 0.7,
  },
};

// CUSTOM HEIGHT
export const TallHero: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200',
    alt: 'Mountains',
    title: 'Tall Hero Image',
    subtitle: 'With custom height',
    height: '600px',
  },
};

// CUSTOM TEXT COLOR
export const CustomTextColor: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200',
    alt: 'Sunset',
    title: 'Custom Colors',
    subtitle: 'With yellow text',
    color: '#ffeb3b',
    overlayOpacity: 0.5,
  },
};