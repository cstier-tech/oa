import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, waitFor, within } from 'storybook/test';
import { Button } from '../Button';
import { Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from './Modal';

const meta = {
  component: Modal,
  tags: ['ai-generated'],
  args: { show: true, onHide: fn(), 'aria-labelledby': 'modal-title' },
  render: (args) => (
    <Modal {...args}>
      <ModalHeader closeButton>
        <ModalTitle id='modal-title'>Delete project?</ModalTitle>
      </ModalHeader>
      <ModalBody>This permanently removes the project and all of its files.</ModalBody>
      <ModalFooter>
        <Button variant='secondary' onClick={args.onHide}>Cancel</Button>
        <Button variant='danger'>Delete</Button>
      </ModalFooter>
    </Modal>
  ),
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  play: async ({ args, canvasElement, userEvent }) => {
    // react-bootstrap portals the modal to document.body, outside the story canvas
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole('dialog', { name: 'Delete project?' });
    // Wait out the fade-in transition
    await waitFor(() => expect(dialog).toBeVisible());
    await userEvent.click(within(dialog).getByRole('button', { name: 'Cancel' }));
    await expect(args.onHide).toHaveBeenCalled();
  },
};

export const Centered: Story = { args: { centered: true } };

export const Large: Story = { args: { size: 'lg' } };
