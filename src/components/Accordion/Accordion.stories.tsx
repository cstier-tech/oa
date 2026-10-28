import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Accordion } from './Accordion';

const meta = {
  component: Accordion,
  tags: ['ai-generated'],
  args: {
    items: [
      { id: '1', label: 'Shipping', body: 'Orders ship within 2 business days.' },
      { id: '2', label: 'Returns', body: 'Returns are accepted within 30 days of delivery.' },
      { id: '3', label: 'Warranty', body: 'All products carry a one-year limited warranty.' },
    ],
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Collapsed: Story = {
  play: async ({ canvas, userEvent }) => {
    const header = canvas.getByRole('button', { name: 'Returns' });
    await expect(header).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(header);
    await expect(header).toHaveAttribute('aria-expanded', 'true');
  },
};

export const FirstOpen: Story = { args: { defaultActiveKey: '1' } };

export const AlwaysOpen: Story = { args: { alwaysOpen: true, defaultActiveKey: ['1', '3'] } };
