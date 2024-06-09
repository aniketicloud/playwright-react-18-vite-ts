import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';
type PagePropsAndCustomArgs = React.ComponentPropsWithRef<typeof Page> & {
  footer?: string;
};

const meta: Meta<PagePropsAndCustomArgs> = {
  component: Page,
  render: ({ footer, ...args }) => {
    return (
      <Page {...args}>
        <footer>{footer}</footer>
      </Page>
    );
  },
};

export default meta;

type Story = StoryObj<PagePropsAndCustomArgs>;

export const CustomFooter: Story = {
  args: {
    footer: 'Custom Footer Built by Nike',
  },
};
