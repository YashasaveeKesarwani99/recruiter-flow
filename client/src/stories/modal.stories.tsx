import type { Meta, StoryObj } from '@storybook/react';
import Modal, { ModalProps } from '../components/modal';

const meta: Meta<ModalProps> = {
  component: Modal,
};

export default meta;
type Story = StoryObj<ModalProps>;

export const ModalEle: Story = {
  args: {
    title: "How to Build a Successful Blog",
    open: true,
    children: <p>this is some bullshit</p>,
    onSubmit: ()=>{
        console.log("this is closed")
    }
  },
};