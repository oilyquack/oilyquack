import { render } from "@testing-library/react";
import React from "react";

import Footer from "../Footer";

describe("shared : Footer", () => {
  it("renders correctly", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
