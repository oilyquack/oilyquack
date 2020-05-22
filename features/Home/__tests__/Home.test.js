import { render } from "@testing-library/react";
import React from "react";

import Home from "../Home";

describe("features : Home", () => {
  it("renders correctly", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
