import Timer from "@/components/global/Timer";
import { Meta, StoryObj } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const meta = {
  title: "Timer",
  component: Timer,
  tags: ["dev"],
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  args: {},
} satisfies Meta<typeof Timer>;

export default meta;

type Story = StoryObj<typeof meta>;
4;

export const MintTimestamp: Story = {
  args: {
    label: "Sample Timer 1",
    timestamp: new Date().getTime() / 1000 + 1000,
  },
};

export const NextJourneyTimestamp: Story = {
  args: {
    label: "Sample Timer 2",
    timestamp: new Date().getTime() / 1000 + 1000,
  },
};
