import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

const Button = () => <button>Test</button>

export default {
  title: "Example/GraphOne",
  component: Button,
} as Meta

const Template: Story<any> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {}
