import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"
import { FiPlus } from "react-icons/fi"

import Avatar from "../components/avatar"
import images from "../components/images"
import { color } from "../design"

export default {
  title: "Basic/Avatar",
  component: Avatar,
} as Meta

const Template: Story<any> = (args) => (
  <Avatar style={{ boxShadow: "0 0 3px 5px rgba(0,0,0,0.05)" }} {...args} />
)

export const Default = Template.bind({})
Default.args = {
  icon: <FiPlus size={25} />,
}

export const WithImg = Template.bind({})
WithImg.args = {
  src: images[0].photo,
}

export const WithIndicator = Template.bind({})
WithIndicator.args = {
  icon: <FiPlus size={25} />,
  online: true,
  onlineColor: color.success.main,
}
