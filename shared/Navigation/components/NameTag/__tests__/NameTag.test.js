import { render } from "@testing-library/react";
import React from "react";

import NameTag from "../NameTag";

describe("shared : Navigation : components : NameTag", () => {
  it("renders correctly", () => {
    const { container } = render(<NameTag />);
    expect(container).toMatchSnapshot();
  });
});
