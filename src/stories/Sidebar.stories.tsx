import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"

import Sidebar from "../compositions/sidebar"

export default {
  title: "Design System/compositions/Sidebar",
  component: Sidebar,
} as Meta

export const NormalSidebar: Story = () => <Sidebar />
