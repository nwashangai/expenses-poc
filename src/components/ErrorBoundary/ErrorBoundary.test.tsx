import { render, screen } from "@testing-library/react";

import ErrorBoundary from ".";

const ComponentWithError = () => {
  throw new Error("Simple error");

  return <div>This is not visible</div>;
};

test("It should render the child component when there is no error", () => {
  render(
    <ErrorBoundary>
      <div>Hello</div>
    </ErrorBoundary>
  );

  expect(screen.getByText("Hello")).toBeDefined();
});

test("It should render the error card with message when there is an error", () => {
  render(
    <ErrorBoundary>
      <div>{<ComponentWithError />}</div>
    </ErrorBoundary>
  );

  expect(screen.getByText("System Error")).toBeDefined();
  expect(screen.getByText("Error: Simple error")).toBeDefined();
  expect(screen.queryByText("This is not visible")).toBeNull();
});
