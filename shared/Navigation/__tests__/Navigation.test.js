import { render } from "@testing-library/react";
import React from "react";

import Navigation from "../Navigation";

describe("shared : Navigation", () => {
  it("renders correctly", () => {
    const { container } = render(<Navigation />);
    expect(container).toMatchSnapshot();
  });
});
