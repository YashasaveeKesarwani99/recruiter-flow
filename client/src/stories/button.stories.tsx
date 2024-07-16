import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from '../components/button';
import PlusOutlined from '../assets/plus';

const meta: Meta<ButtonProps> = {
    component: Button
}

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
    args: {
        primary: true,
        children: "Button"
    }
}