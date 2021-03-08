import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"
import Pie from "../components/pie"

export default {
  title: "Basic/Pie",
  component: Pie,
  argTypes: {},
} as Meta

const Template: Story<any> = (args) => (
  <div style={{ maxWidth: "30rem" }}>
    <Pie {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  height: 200,
  width: 200,
  percent: 30,
  thickness: 10,
  pie: true,
  color: "#1e90ff",
  background: true,
  backgroundOpacity: 0.2,
}
