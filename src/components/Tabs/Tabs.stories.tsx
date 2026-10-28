import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Tab, Tabs } from './Tabs';

const meta = {
  component: Tabs,
  tags: ['ai-generated'],
  args: { id: 'account-tabs', defaultActiveKey: 'profile' },
  render: (args) => (
    <Tabs {...args}>
      <Tab eventKey='profile' title='Profile'>Name, email and avatar settings.</Tab>
      <Tab eventKey='billing' title='Billing'>Payment methods and invoices.</Tab>
      <Tab eventKey='security' title='Security'>Password and two-factor authentication.</Tab>
    </Tabs>
  ),
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  play: async ({ canvas, userEvent }) => {
    const billing = canvas.getByRole('tab', { name: 'Billing' });
    await expect(billing).toHaveAttribute('aria-selected', 'false');
    await userEvent.click(billing);
    await expect(billing).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('Payment methods and invoices.');
  },
};

export const Line: Story = { args: { tabStyle: 'line' } };
