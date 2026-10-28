import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { OptContent, OptItem, OptList } from './OptList';

const meta = {
  component: OptList,
  tags: ['ai-generated'],
} satisfies Meta<typeof OptList>;

export default meta;
type Story = StoryObj<typeof meta>;

const shippingOptions = [
  { id: 'standard', label: 'Standard shipping', info: 'Arrives in 5–7 business days. Free.' },
  { id: 'express', label: 'Express shipping', info: 'Arrives in 2 business days. $12.' },
  { id: 'pickup', label: 'Store pickup', info: 'Ready for pickup tomorrow.' },
];

function ShippingPicker() {
  const [selected, setSelected] = useState('standard');
  return (
    <OptList>
      {shippingOptions.map((option) => (
        <OptItem
          key={option.id}
          id={`ship-${option.id}`}
          name='shipping'
          label={option.label}
          checked={selected === option.id}
          onChange={() => setSelected(option.id)}
        >
          <OptContent>{option.info}</OptContent>
        </OptItem>
      ))}
    </OptList>
  );
}

export const RadioGroup: Story = {
  render: () => <ShippingPicker />,
  play: async ({ canvas, userEvent }) => {
    const express = canvas.getByRole('radio', { name: 'Express shipping' });
    await expect(canvas.getByRole('radio', { name: 'Standard shipping' })).toBeChecked();
    await userEvent.click(express);
    await expect(express).toBeChecked();
    await expect(canvas.getByRole('radio', { name: 'Standard shipping' })).not.toBeChecked();
  },
};

export const Checkboxes: Story = {
  render: () => (
    <OptList>
      <OptItem id='notify-email' type='checkbox' label='Email notifications' defaultChecked />
      <OptItem id='notify-sms' type='checkbox' label='SMS notifications' />
    </OptList>
  ),
};

export const WithForm: Story = {
  render: () => (
    <OptList>
      <OptItem id='pay-card' name='payment' label='Credit card' checked readOnly>
        <OptContent isForm>
          <label htmlFor='card-number' className='form-label'>Card number</label>
          <input id='card-number' className='form-control' placeholder='1234 5678 9012 3456' />
        </OptContent>
      </OptItem>
      <OptItem id='pay-invoice' name='payment' label='Invoice' checked={false} readOnly />
    </OptList>
  ),
};
