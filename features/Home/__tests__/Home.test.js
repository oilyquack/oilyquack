import { render, screen } from "@testing-library/react";
import React from "react";

import Home from "../Home";

describe("features : Home", () => {
  it("renders correctly", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it("should link to malapropism definition on wikipedia", () => {
    render(<Home />);

    const link = screen.getByRole("link", { name: /malapropism/ });

    expect(link).toHaveAttribute(
      "href",
      "https://en.wikipedia.org/wiki/Malapropism"
    );
  });

  it("should link to my GitHub page", () => {
    render(<Home />);

    const link = screen.getByRole("link", { name: /GitHub/ });

    expect(link).toHaveAttribute("href", "https://github.com/oilyquack");
  });

  it("should link to my Twitter page", () => {
    render(<Home />);

    const link = screen.getByRole("link", { name: /Twitter/ });

    expect(link).toHaveAttribute("href", "https://twitter.com/oilyquack");
  });
});
