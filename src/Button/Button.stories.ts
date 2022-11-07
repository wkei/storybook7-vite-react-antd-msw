import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'AntD Button',
  },
};

export const Tailwind: Story = {
  args: {
    className: "border-solid border-orange-600 border-1 text-orange-700",
    children: "Click me",
  }
}

export const TestMockWorker: Story = {
  args: {
    children: 'hello',
    onClick: () => {
      fetch('/hello')
        .then(res => res.json())
        .then(data => alert(JSON.stringify(data)))
        .catch(err => console.error(err))
    },
  },
}

