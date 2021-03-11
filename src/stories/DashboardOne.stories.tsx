import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"
import {
  UserCard as UserCardComponent,
  UserCardProps,
  MarketingCard as MarketingCardComponent,
} from "../compositions/dashboardOne"

import images from "../components/images"
import { color } from "../design"
import DashboardGrid from "../grids/dashboardOne"

export default {
  title: "Design System/compositions/DashboardOne",
} as Meta

export const UserCard: Story<UserCardProps> = (args: UserCardProps) => (
  <div style={{ maxWidth: "40rem", boxShadow: "0 3px 5px rgba(0,0,0,0.1)" }}>
    <UserCardComponent {...args} />
  </div>
)
UserCard.args = {
  photo: images[0].photo,
  name: images[0].name,
  location: "Bulgaria",
  progressBars: [
    {
      width: 50,
      color: color.success.main,
      title: "Instagram",
      titleNumber: 34908,
    },
    {
      width: 30,
      color: color.success.main,
      title: "Facebook",
      titleNumber: 14910,
    },
    {
      width: 85,
      color: color.success.main,
      title: "Twitter",
      titleNumber: 59020,
    },
  ],
}

export const MarketingCard: Story = () => <MarketingCardComponent />

export const Grid: Story = () => <DashboardGrid />

const colors = [color.success.main, color.danger.main, color.primary.main]
export const GridWithContent: Story = () => (
  <DashboardGrid
    content={{
      top: {
        cards: [
          ...images.slice(0, 3).map((item: any, index: number) => (
            <UserCard
              photo={item.photo}
              name={item.name}
              location="Bulgaria"
              progressBars={[
                {
                  width: 50,
                  color: colors[index],
                  title: "Instagram",
                  titleNumber: 34908,
                },
                {
                  width: 30,
                  color: colors[index],
                  title: "Facebook",
                  titleNumber: 14910,
                },
                {
                  width: 85,
                  color: colors[index],
                  title: "Twitter",
                  titleNumber: 59020,
                },
              ]}
              key={index}
            />
          )),
        ],
      },
    }}
  />
)
