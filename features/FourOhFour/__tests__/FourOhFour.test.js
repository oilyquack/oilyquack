import { render } from "@testing-library/react";
import React from "react";

import FourOhFour from "../FourOhFour";

describe("features : FourOhFour", () => {
  it("renders correctly", () => {
    const { container } = render(<FourOhFour />);
    expect(container).toMatchSnapshot();
  });
});
