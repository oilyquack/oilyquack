import { render } from "@testing-library/react";
import React from "react";

import Home from "../Home";

describe("features : Home", () => {
  it("renders correctly", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it("should link to malapropism definition on wikipedia", () => {
    const { getByText } = render(<Home />);

    const link = getByText(/malapropism/);

    const resultHref = new URL(link.href).toString();

    expect(resultHref).toBe("https://en.wikipedia.org/wiki/Malapropism");
  });

  it("should link to my GitHub page", () => {
    const { getByText } = render(<Home />);

    const link = getByText(/GitHub/);

    const resultHref = new URL(link.href).toString();

    expect(resultHref).toBe("https://github.com/oilyquack");
  });

  it("should link to my Twitter page", () => {
    const { getByText } = render(<Home />);

    const link = getByText(/Twitter/);

    const resultHref = new URL(link.href).toString();

    expect(resultHref).toBe("https://twitter.com/oilyquack");
  });
});
