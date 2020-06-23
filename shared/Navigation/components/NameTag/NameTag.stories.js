import React from "react";
import NameTag from "./NameTag";

export default {
  title: "NameTag",
  component: NameTag,
};

export const Primary = () => <NameTag />;

Primary.story = {
  name: "Primary",
};
