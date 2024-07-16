import type { Meta, StoryObj } from '@storybook/react';
import Card, { CardProps } from '../components/card';

const meta: Meta<CardProps> = {
  component: Card,
};

export default meta;
type Story = StoryObj<CardProps>;

export const CardEle: Story = {
  args: {
    title: "How to Build a Successful Blog",
    content: "Building a successful blog takes time, effort, and dedication. It's not just about writing; it's about creating valuable content that resonates with y...",
    author: "Yashasavee",
    date_published: '2024-03-23 '
  },
};