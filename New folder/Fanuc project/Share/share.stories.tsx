import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Share from "./";
import { entity } from "./share.mocks";

export default {
  title: "Design System/components/Share",
  component: Share
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Share>;

const Template: ComponentStory<typeof Share> = args => <Share {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  url: entity.url
};
