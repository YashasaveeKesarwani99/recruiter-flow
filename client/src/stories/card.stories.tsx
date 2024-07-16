import type { Meta, StoryObj } from '@storybook/react';
import Card, { CardProps } from '../components/card';

const meta: Meta<CardProps> = {
  component: Card,
};

export default meta;
type Story = StoryObj<CardProps>;

export const Primary: Story = {
  args: {
    title: "Title",
    content: 'Content',
  },
};