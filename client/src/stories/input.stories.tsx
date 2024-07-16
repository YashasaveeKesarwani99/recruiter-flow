import type { Meta, StoryObj } from '@storybook/react';
import Input, { InputProps } from '../components/input';

const meta: Meta<InputProps> = {
  component: Input,
};

export default meta;
type Story = StoryObj<InputProps>;

export const InputEle: Story = {
  args: {
    type: 'input',
    placeholder: 'input',
  },
};

export const TextArea: Story = {
    args: {
        type: 'text',
        placeholder:'textarea'
    }
}