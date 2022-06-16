import { COLUMN, EXPENSES_URL } from "../constants";

export type ExpensesType = {
  departments: string;
  project_name: string;
  amount: string;
  date: string;
  member_name: string;
};

const group_by = (column: COLUMN, data: ExpensesType[]) => {
  let totalAmount = 0.0;
  if (column !== COLUMN.All) {
    const columnValues = {} as ExpensesType;
    const newData: { [key: string]: string; amount: string }[] = [];

    data.forEach((record) => {
      const currentAmount = parseFloat(record.amount.replace(",", ""));

      if (record[column] in columnValues) {
        columnValues[record[column]] =
          columnValues[record[column]] + currentAmount;
      } else {
        columnValues[record[column]] = currentAmount;
      }

      totalAmount += currentAmount;
    });

    for (const [key, value] of Object.entries(columnValues)) {
      newData.push({ [column]: key, amount: parseFloat(value).toFixed(2) });
    }

    return { totalAmount: totalAmount.toFixed(2), data: newData };
  } else {
    const newData: ExpensesType[] = [];

    totalAmount = data.reduce(
      (prev: number, current: ExpensesType) =>
        {
          newData.push({...current, amount: parseFloat(current.amount.replace(",", "")).toString()})
          return prev + parseFloat(current.amount.replace(",", ""))
        },
      totalAmount
    );
    

    return { totalAmount: totalAmount.toFixed(2), data: newData };
  }
};

export const loadExpensesData = async (column: COLUMN) => {
  const response = await fetch(EXPENSES_URL);
  const data = await response.json();
  return group_by(column, data);
};

export default loadExpensesData;
