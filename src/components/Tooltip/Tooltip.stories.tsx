import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Button } from '../Button';
import { Tooltip } from './Tooltip';

const meta = {
  component: Tooltip,
  tags: ['ai-generated'],
  args: { title: 'Copy link to clipboard', placement: 'bottom', children: <Button>Share</Button> },
  decorators: [
    (Story) => (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnHover: Story = {
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.hover(canvas.getByRole('button', { name: 'Share' }));
    // Tooltip is portaled to document.body
    const tooltip = await within(canvasElement.ownerDocument.body).findByRole('tooltip');
    await expect(tooltip).toHaveTextContent('Copy link to clipboard');
  },
};

export const Top: Story = { args: { placement: 'top' } };

export const TextChild: Story = { args: { children: 'What is this?' } };
