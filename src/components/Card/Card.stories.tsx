import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Button } from '../Button';
import { Card, CardBody, CardFooter, CardGroup, CardHeader, CardLink, CardSubtitle, CardText, CardTitle } from './Card';

const meta = {
  component: Card,
  tags: ['ai-generated'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <Card {...args} style={{ maxWidth: '20rem' }}>
      <CardBody>
        <CardTitle>Starter plan</CardTitle>
        <CardSubtitle className='mb-2 text-muted'>$9 / month</CardSubtitle>
        <CardText>Everything you need to get a small team up and running.</CardText>
        <Button>Choose plan</Button>
      </CardBody>
    </Card>
  ),
};

export const WithHeaderAndFooter: Story = {
  render: (args) => (
    <Card {...args} style={{ maxWidth: '20rem' }}>
      <CardHeader>Featured</CardHeader>
      <CardBody>
        <CardText>Weekly digest of the most-read articles.</CardText>
      </CardBody>
      <CardFooter className='text-muted'>Updated 2 days ago</CardFooter>
    </Card>
  ),
};

export const WithLinks: Story = {
  render: (args) => (
    <Card {...args} style={{ maxWidth: '20rem' }}>
      <CardBody>
        <CardTitle>Documentation</CardTitle>
        <CardLink href='/docs/getting-started'>Getting started</CardLink>
        <CardLink href='/docs/api'>API reference</CardLink>
      </CardBody>
    </Card>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('link', { name: 'API reference' })).toHaveAttribute('href', '/docs/api');
  },
};

export const Group: Story = {
  render: () => (
    <CardGroup>
      {['Design', 'Build', 'Ship'].map((title) => (
        <Card key={title}>
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>Step description for {title.toLowerCase()}.</CardText>
          </CardBody>
        </Card>
      ))}
    </CardGroup>
  ),
};
