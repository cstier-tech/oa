import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { Offcanvas, OffcanvasCloser } from './Offcanvas';

const meta = {
  component: Offcanvas,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
  args: {
    show: true,
    children: (
      <div className='p-3'>
        <h5>Filters</h5>
        <p>Narrow the results by category, price, and availability.</p>
        <OffcanvasCloser />
      </div>
    ),
  },
} satisfies Meta<typeof Offcanvas>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
  play: async ({ canvas, canvasElement }) => {
    const panel = canvasElement.ownerDocument.getElementById('my-offcanvas')!;
    await expect(panel).toHaveClass('offcanvas-left', 'offcanvas-shadow');
    // Wait out the slide-in transition
    await waitFor(() => expect(canvas.getByRole('heading', { name: 'Filters' })).toBeVisible());
    await waitFor(() => expect(panel.getBoundingClientRect().left).toBe(0));
  },
};

export const Right: Story = {
  args: { placement: 'right' },
  play: async ({ canvasElement }) => {
    const panel = canvasElement.ownerDocument.getElementById('my-offcanvas')!;
    await expect(panel).toHaveClass('offcanvas-right');
    await waitFor(() =>
      expect(panel.getBoundingClientRect().right).toBe(canvasElement.ownerDocument.documentElement.clientWidth),
    );
  },
};

export const Fullscreen: Story = {
  args: { fullscreen: true },
  play: async ({ canvasElement }) => {
    const panel = canvasElement.ownerDocument.getElementById('my-offcanvas')!;
    await expect(panel).toHaveClass('offcanvas-fullscreen');
    await expect(panel).not.toHaveClass('offcanvas-lg');
  },
};

export const NoShadow: Story = {
  args: { shadow: false },
  play: async ({ canvasElement }) => {
    const panel = canvasElement.ownerDocument.getElementById('my-offcanvas')!;
    await expect(panel).not.toHaveClass('offcanvas-shadow');
  },
};
