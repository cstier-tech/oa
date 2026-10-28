import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import { Alert } from './Alert';

const meta = {
  component: Alert,
  tags: ['ai-generated'],
  args: { children: 'Your profile was updated.' },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Danger: Story = { args: { variant: 'danger', children: 'Payment failed. Please try again.' } };

export const Warning: Story = { args: { variant: 'warning', children: 'Your session expires in 5 minutes.' } };

export const Dismissible: Story = {
  args: { variant: 'success', dismissible: true, onClose: fn() },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /close/i }));
    await expect(args.onClose).toHaveBeenCalled();
  },
};
