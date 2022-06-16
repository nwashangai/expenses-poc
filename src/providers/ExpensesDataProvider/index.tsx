import { createContext, useContext, useReducer, useEffect } from "react";
import { COLUMN, ACTION } from "../../constants";
import loadExpensesData from "../../utils/loadExpensesData"
import { DataStateType, Action } from "./types";
import reducer from "./reducer";

type Props = {
  children: JSX.Element;
};

type ContextType = {
  dispatch?: React.Dispatch<Action>;
};

const initialState = {
  data: [],
  column: COLUMN.All,
  loading: true,
  total: 0,
};

export const ExpensesDataContext = createContext<ContextType & DataStateType>(
  initialState
);

function ExpensesDataProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchExpensesData = async () => {
    dispatch({ type: ACTION.START_LOADING })
    try {
      const expenses = await loadExpensesData(state.column);
      dispatch({ type: ACTION.ADD_EXPENSES_DATA, payload: { data: expenses.data, total: expenses.totalAmount } })
    } catch (error) {
      throw new Error("Problem loading data from the server");
    }
    
  }

  useEffect(() => {
    fetchExpensesData()
  }, [state.column])

  return (
    <ExpensesDataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ExpensesDataContext.Provider>
  );
}

export const useExpensesData = () => {
  return useContext(ExpensesDataContext);
};

export default ExpensesDataProvider;
