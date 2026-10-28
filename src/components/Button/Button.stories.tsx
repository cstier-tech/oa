import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import { Button, CircleButton, IconButton } from './Button';

const meta = {
  component: Button,
  tags: ['ai-generated'],
  args: { children: 'Save changes', onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /save changes/i }));
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const OutlineSecondary: Story = { args: { variant: 'outline-secondary', children: 'Cancel' } };

export const Small: Story = { args: { size: 'sm' } };

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /save changes/i });
    await expect(button).toBeDisabled();
    // Bootstrap's .btn:disabled blocks pointer interaction entirely
    await expect(getComputedStyle(button).pointerEvents).toBe('none');
  },
};

export const Icon: Story = {
  render: () => <IconButton icon='user' variant='info' size='sm' aria-label='Profile' />,
};

export const Circle: Story = {
  render: () => <CircleButton icon='user' aria-label='Profile' />,
};
