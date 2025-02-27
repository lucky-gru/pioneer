import { Meta, Story } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { getMember } from '../../../../test/_mocks/members'

import { PreviewPostModal, PreviewPostModalProps } from './PreviewPostModal'

export default {
  title: 'Forum/CreateThreadModal/PreviewThreadModal',
  component: PreviewPostModal,
} as Meta

const Template: Story<PreviewPostModalProps> = ({ author, text }) => (
  <MemoryRouter>
    <PreviewPostModal onClose={() => null} author={author} text={text} />
  </MemoryRouter>
)

export const Default = Template.bind({})
Default.args = {
  onClose: () => null,
  author: getMember('alice'),
  text: '## magni eius qui eaquen\n\n**ecessitatibus expedita** mollitia nobis omnis qui sint suscipit voluptatem excepturi nemo illo eaque suscipit consequatur ab quae expedita est modi *voluptatem* ipsum iure temporibus et voluptatem aut voluptatem et voluptas',
}
