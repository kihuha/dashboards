import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"

import Progress from "../components/progress"
import { color } from "../design"

export default {
  title: "Basic/Progress",
  component: Progress,
} as Meta

const Template: Story<any> = (args) => <Progress {...args} />

export const Default = Template.bind({})
Default.args = {
  width: 30,
  color: color.primary.main,
}

export const WithTitle = Template.bind({})
WithTitle.args = {
  width: 30,
  color: color.primary.main,
  title: "Instagram",
  titleNumber: "328978",
}
