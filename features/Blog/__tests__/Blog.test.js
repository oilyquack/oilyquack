import { render } from "@testing-library/react";
import React from "react";

import Blog from "../Blog";

describe("features : Blog", () => {
  it("renders correctly", () => {
    const { container } = render(<Blog />);
    expect(container).toMatchSnapshot();
  });
});
