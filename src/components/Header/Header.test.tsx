import { render, screen } from "@testing-library/react";

import Header from ".";

const onChange = jest.fn();

test("It should render the header component", () => {
  render(
    <Header onChange={onChange} />
  );
  expect(screen.getByText("Total Expenses by:")).toBeDefined();
  expect(screen.getByText("All")).toBeDefined();
});
