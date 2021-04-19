import React from "react";

import { firstName, lastName, NameTagWrapper } from "./NameTag.module.css";

const NameTag = () => (
  <div className={NameTagWrapper} unselectable="on">
    <span className={firstName}>
      <span>Ollie</span>
      <span>@Oily</span>
    </span>
    <span> </span>
    <span className={lastName}>
      <span>Crook</span>
      <span>Quack</span>
    </span>
  </div>
);
export default NameTag;
