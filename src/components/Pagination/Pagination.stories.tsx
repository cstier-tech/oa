import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { PageItem, Pagination } from './Pagination';

const meta = {
  component: Pagination,
  tags: ['ai-generated'],
  render: (args) => (
    <Pagination {...args}>
      <PageItem disabled>Previous</PageItem>
      <PageItem>1</PageItem>
      <PageItem>2</PageItem>
      <PageItem active>3</PageItem>
      <PageItem>4</PageItem>
      <PageItem>Next</PageItem>
    </Pagination>
  ),
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    // The active PageItem announces itself via a visually-hidden "(current)" label
    await expect(canvas.getByText('(current)').closest('.page-item')).toHaveTextContent('3');
  },
};

export const Small: Story = { args: { size: 'sm' } };

export const Large: Story = { args: { size: 'lg' } };
