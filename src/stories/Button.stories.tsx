import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"

import Button from "../components/button"

export default {
  title: "Basic/Button",
  component: Button,
} as Meta

const Template: Story<any> = (args) => (
  <Button style={{ boxShadow: "0 0 3px 5px rgba(0,0,0,0.05)" }} {...args} />
)

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
