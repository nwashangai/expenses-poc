import { COLUMN, ACTION } from "../../constants";

type Data = {
  departments?: string;
  project_name?: string;
  amount: string;
  date?: string;
  member_name?: string;
};

export type DataStateType = {
  data: Data[];
  column: COLUMN;
  loading: boolean;
  total: number;
};

export type Action = {
  type: ACTION;
  payload?: any;
};
