import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { Offcanvas, OffcanvasCloser } from './Offcanvas';

const meta = {
  component: Offcanvas,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
  args: {
    id: 'my-offcanvas',
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

function ClosableOffcanvas() {
  const [show, setShow] = useState(true);
  return (
    <Offcanvas show={show}>
      <div className='p-3'>
        <h5>Filters</h5>
        <OffcanvasCloser onClick={() => setShow(false)} />
      </div>
    </Offcanvas>
  );
}

export const Left: Story = {
  play: async ({ canvas, canvasElement }) => {
    const panel = canvasElement.ownerDocument.getElementById('my-offcanvas')!;
    await expect(panel).toHaveClass('offcanvas-left', 'offcanvas-shadow');
    // Wait out the slide-in transition
    await waitFor(() => expect(canvas.getByRole('heading', { name: 'Filters' })).toBeVisible());
    await waitFor(() => expect(panel.getBoundingClientRect().left).toBe(0));
    await expect(panel).toHaveStyle({ backgroundColor: 'rgb(255, 255, 255)' });
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
    await expect(panel).not.toHaveClass('offcanvas-panel-lg');
  },
};

export const NoShadow: Story = {
  args: { shadow: false },
  play: async ({ canvasElement }) => {
    const panel = canvasElement.ownerDocument.getElementById('my-offcanvas')!;
    await expect(panel).not.toHaveClass('offcanvas-shadow');
    await expect(panel).toHaveStyle({ boxShadow: 'none' });
  },
};

export const Closing: Story = {
  render: () => <ClosableOffcanvas />,
  play: async ({ canvas, userEvent }) => {
    const heading = canvas.getByRole('heading', { name: 'Filters' });
    await waitFor(() => expect(heading).toBeVisible());
    await userEvent.click(canvas.getByRole('button', { name: 'Close' }));
    // Wait out the slide-out transition
    await waitFor(() => expect(heading).not.toBeVisible());
  },
};
