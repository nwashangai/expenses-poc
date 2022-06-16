import { DataStateType, Action } from "./types";
import { ACTION } from "../../constants";

const reducer = (state: DataStateType, action: Action) => {
  switch (action.type) {
    case ACTION.ADD_EXPENSES_DATA:
      return {
        ...state,
        data: action.payload.data,
        total: action.payload.total,
        loading: false,
      };

    case ACTION.CHANGE_COLUMN:
      return { ...state, column: action.payload };

    case ACTION.CHANGE_PAGE:
      return { ...state, page: action.payload };

    case ACTION.CHANGE_LIMIT:
      return { ...state, limit: action.payload };

    case ACTION.START_LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
};

export default reducer;
