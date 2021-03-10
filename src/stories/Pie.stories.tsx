import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"
import Pie from "../components/pie"

export default {
  title: "Design System/components/Pie",
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
  data: 30,
  thickness: 10,
  pie: true,
  color: "#1e90ff",
  background: true,
  backgroundOpacity: 0.2,
}

export const MultipleDataItems = Template.bind({})
MultipleDataItems.args = {
  height: 200,
  width: 200,
  data: [
    {
      value: 20,
      color: "red",
    },
    {
      value: 40,
      color: "dodgerblue",
    },
    {
      value: 50,
      color: "springgreen",
    },
  ],
  thickness: 10,
  pie: true,
}

export const Doughnut = Template.bind({})
Doughnut.args = {
  height: 200,
  width: 200,
  data: 30,
  thickness: 10,
  pie: false,
  color: "#1e90ff",
  background: true,
  backgroundOpacity: 0.2,
}

export const MultipleDataItemsDoughnut = Template.bind({})
MultipleDataItemsDoughnut.args = {
  height: 200,
  width: 200,
  data: [
    {
      value: 20,
      color: "red",
    },
    {
      value: 40,
      color: "dodgerblue",
    },
    {
      value: 50,
      color: "springgreen",
    },
  ],
  thickness: 10,
  pie: false,
}
