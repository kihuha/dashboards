import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"

import Button from "../components/button"

export default {
  title: "Basic/Button",
  component: Button,
} as Meta

const Template: Story<any> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: "See More",
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: "See More",
  primary: false,
}
