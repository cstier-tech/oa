import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Badge } from './Badge';

const meta = {
  component: Badge,
  tags: ['ai-generated'],
  args: { children: 'New', variant: 'primary' },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Danger: Story = { args: { variant: 'danger', children: 'Overdue' } };

export const Info: Story = { args: { variant: 'info', children: 'Beta' } };

export const Pill: Story = { args: { variant: 'success', className: 'badge-pill', children: '12' } };

export const CssCheck: Story = {
  play: async ({ canvas }) => {
    const badge = canvas.getByText('New');
    // .badge-primary uses $theme-colors primary (#3f51b5) — fails if src/styles/index.scss did not load.
    await expect(getComputedStyle(badge).backgroundColor).toBe('rgb(63, 81, 181)');
  },
};
