// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Boulder } from "../../features/boulder/Boulder";

export default {
  title: "Boulder",
  component: Boulder,
} as ComponentMeta<typeof Boulder>;

export const Primary: ComponentStory<typeof Boulder> = () => <Boulder />;
