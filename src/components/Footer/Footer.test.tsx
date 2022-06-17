import { render, screen } from "@testing-library/react";

import Header from ".";

test("It should render the header component", () => {
  render(
    <Header total={"3000"} />
  );
  expect(screen.getByText("Total")).toBeDefined();
  expect(screen.getByText("3,000")).toBeDefined();
});
