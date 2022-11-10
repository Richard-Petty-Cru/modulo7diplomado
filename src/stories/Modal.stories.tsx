import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BasicModal } from '../components/modal';

export default {
  title: 'Example/Modal',
  component: BasicModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BasicModal>;

const Template: ComponentStory<typeof BasicModal> = (args) => <BasicModal/>;


export const Simple = Template.bind({});

Simple.args = {
  label: 'Simple',
};



export const Advanced = Template.bind({});

Advanced.args = {
  label: 'Advanced',
};

