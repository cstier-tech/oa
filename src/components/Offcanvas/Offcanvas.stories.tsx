import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { Button } from '../Button';
import { Offcanvas, OffcanvasCloser } from './Offcanvas';

function OffcanvasWithTrigger(args: Offcanvas) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className='p-3'>
        <Button onClick={() => setShow(true)}>Open offcanvas</Button>
      </div>
      <Offcanvas {...args} show={show}>
        <div className='p-3'>
          <h5>Filters</h5>
          <p>Narrow the results by category, price, and availability.</p>
          <OffcanvasCloser onClick={() => setShow(false)} />
        </div>
      </Offcanvas>
    </>
  );
}

const meta = {
  component: Offcanvas,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
  // The trigger owns these, so their controls would do nothing
  argTypes: { show: { control: false }, children: { control: false } },
  args: { id: 'my-offcanvas' },
  render: (args) => <OffcanvasWithTrigger {...args} />,
} satisfies Meta<typeof Offcanvas>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Open offcanvas' }));
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
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Open offcanvas' }));
    const panel = canvasElement.ownerDocument.getElementById('my-offcanvas')!;
    await expect(panel).toHaveClass('offcanvas-right');
    await waitFor(() =>
      expect(panel.getBoundingClientRect().right).toBe(canvasElement.ownerDocument.documentElement.clientWidth),
    );
  },
};

export const Fullscreen: Story = {
  args: { size: 'fullscreen' },
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Open offcanvas' }));
    const panel = canvasElement.ownerDocument.getElementById('my-offcanvas')!;
    await expect(panel).toHaveClass('offcanvas-fullscreen');
    await expect(panel).not.toHaveClass('offcanvas-panel-lg');
  },
};

export const NoShadow: Story = {
  args: { shadow: false },
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Open offcanvas' }));
    const panel = canvasElement.ownerDocument.getElementById('my-offcanvas')!;
    await expect(panel).not.toHaveClass('offcanvas-shadow');
    await expect(panel).toHaveStyle({ boxShadow: 'none' });
  },
};

export const Closing: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Open offcanvas' }));
    const heading = await canvas.findByRole('heading', { name: 'Filters' });
    await waitFor(() => expect(heading).toBeVisible());
    await userEvent.click(canvas.getByRole('button', { name: 'Close' }));
    // Wait out the slide-out transition
    await waitFor(() => expect(heading).not.toBeVisible());
  },
};
