export enum COLUMN {
  All = "*",
  Departments = "departments",
  Project_Name = "project_name",
  Date = "date",
  Name = "member_name",
  Amount = "amount",
}

export enum ACTION {
  ADD_EXPENSES_DATA = "ADD_EXPENSES_DATA",
  CHANGE_COLUMN = "CHANGE_COLUMN",
  CHANGE_PAGE = "CHANGE_PAGE",
  CHANGE_LIMIT = "CHANGE_LIMIT",
  START_LOADING = "START_LOADING"
}

export const EXPENSES_URL = '/mock/expensesData.json'

export type ExpensesType = {
  departments: string;
  project_name: string;
  amount: string;
  date: string;
  member_name: string;
};

export const columns = {
  departments: 'Departments',
  project_name: 'Project Name',
  date: 'Date',
  member_name: 'Name',
  amount: "Amount",
}