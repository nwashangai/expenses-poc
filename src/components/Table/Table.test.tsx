import { fireEvent, render, screen } from "@testing-library/react";
import { unfilteredData } from "../../_mock";
import { COLUMN } from "../../constants";

import Table from ".";

test("It should render expenses table with all columns and footer", () => {
  render(
    <Table data={unfilteredData} column={COLUMN.All} footer={() => "footer"} />
  );
  expect(screen.getByText("George")).toBeDefined();
  expect(screen.getByText("3/8/2021")).toBeDefined();
  expect(screen.getAllByText("Asterin")[0]).toBeDefined();
  expect(screen.queryByText("9/17/2021")).toBeNull();
  expect(screen.getByText("footer")).toBeDefined();
});

test("It should render expenses table with only departments and amount columns", () => {
  render(
    <Table
      data={unfilteredData}
      column={COLUMN.Departments}
      footer={() => "footer"}
    />
  );
  expect(screen.queryByText("George")).toBeNull();
  expect(screen.queryByText("3/8/2021")).toBeNull();
  expect(screen.getByText("Departments")).toBeDefined();
  expect(screen.getAllByText("IT")[0]).toBeDefined();
});

test("It should sort expenses by column clicked", () => {
  render(
    <Table data={unfilteredData} column={COLUMN.All} footer={() => "footer"} />
  );

  fireEvent.click(screen.getByText("Name"));
  fireEvent.click(screen.getByText("Project Name"));
  fireEvent.click(screen.getByText("Amount"));
  fireEvent.click(screen.getByText("Date"));
  fireEvent.click(screen.getByText("Departments"));

  expect(screen.getAllByText("Finance")[0]).toBeDefined();
  expect(screen.getAllByText("Gaama")[0]).toBeDefined();
  expect(screen.getByText("Departments")).toBeDefined();
  expect(screen.queryByText("IT")).toBeNull();
});

test("It should sort expenses by column clicked when filtered", () => {
  render(
    <Table data={unfilteredData} column={COLUMN.Name} footer={() => "footer"} />
  );

  fireEvent.click(screen.getByText("Amount"));
  fireEvent.click(screen.getByText("Name"));

  expect(screen.queryByText("AlphaDeo")).toBeNull();
  expect(screen.queryByText("Sales")).toBeNull();
  expect(screen.getAllByText("Ann")[0]).toBeDefined();
  expect(screen.queryByText("IT")).toBeNull();
  expect(screen.queryByText("Departments")).toBeNull();
  expect(screen.queryByText("IT")).toBeNull();
});

test("It should sort expenses by date column clicked", () => {
  render(
    <Table data={unfilteredData} column={COLUMN.Date} footer={() => "footer"} />
  );

  fireEvent.click(screen.getByText("Amount"));
  fireEvent.click(screen.getByText("Date"));

  expect(screen.queryByText("AlphaDeo")).toBeNull();
  expect(screen.queryByText("Sales")).toBeNull();
  expect(screen.getAllByText("1/13/2021")[0]).toBeDefined();
  expect(screen.getAllByText("5,807")[0]).toBeDefined();
  expect(screen.queryByText("IT")).toBeNull();
  expect(screen.queryByText("Departments")).toBeNull();
  expect(screen.queryByText("IT")).toBeNull();
});
