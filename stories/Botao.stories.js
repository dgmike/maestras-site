import React from "react";
import Logo from "../components/logo";

export default {
  title: "Atom/Logo",
  component: Logo,
  argTypes: {
    inverted: { control: "boolean" },
  },
};

const Template = (args) => <Logo {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Inverted = Template.bind({});
Inverted.args = { inverted: true };
