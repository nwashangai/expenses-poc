import { Table } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { ExpensesType, COLUMN, columns } from "../../constants";

const columnObj: ColumnsType<ExpensesType> = [
  {
    title: columns.departments,
    dataIndex: COLUMN.Departments,
    sorter: {
      compare: (a: any, b: any) => a.departments.localeCompare(b.departments),
    },
  },
  {
    title: columns.project_name,
    dataIndex: COLUMN.Project_Name,
    sorter: {
      compare: (a: any, b: any) => a.project_name.localeCompare(b.project_name),
    },
  },
  {
    title: columns.amount,
    dataIndex: COLUMN.Amount,
    render: (amount: string) => amount.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    sorter: {
      compare: (a: any, b: any) => parseFloat(a.amount) - parseFloat(b.amount),
    },
  },
  {
    title: columns.date,
    dataIndex: COLUMN.Date,
    sorter: {
      compare: (a: any, b: any) =>
        new Date(a.date).valueOf() - new Date(b.date).valueOf(),
    },
  },
  {
    title: columns.member_name,
    dataIndex: COLUMN.Name,
    sorter: {
      compare: (a: any, b: any) => a.member_name.localeCompare(b.member_name),
    },
  },
];

const generateColumn = (column) => {
  if (column === COLUMN.All) {
    return columnObj;
  } else {
    return [
      {
        title: columns[column],
        dataIndex: column,
        sorter: {
          compare: (a: any, b: any) => {
            if (column === COLUMN.Date) {
              return new Date(a.date).valueOf() - new Date(b.date).valueOf();
            } else {
              return a[column].localeCompare(b[column]);
            }
          },
        },
      },
      {
        title: columns.amount,
        dataIndex: COLUMN.Amount,
        render: (amount: string) => amount.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        sorter: {
          compare: (a: any, b: any) =>
            parseFloat(a.amount) - parseFloat(b.amount),
        },
      },
    ];
  }
};

function ExpensesTable({ data, column, footer }) {
  const columnData = generateColumn(column);

  return <Table columns={columnData} dataSource={data} footer={footer} />;
}

export default ExpensesTable;
