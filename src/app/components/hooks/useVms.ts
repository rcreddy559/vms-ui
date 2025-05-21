import React from "react";
import { VmsScheme } from "../types/VmsScheme";
import { getInitialState } from "../utils/getInitialState";
import { modelReducer } from "./context/reducer/modelReducer";
import {PAGE_SIDEBAR, SET_CURRENT_PAGE, SET_USERS} from "../utils/Constants";

const initialState = getInitialState();
export function useVms(): VmsScheme {
  const [state, dsipatch] = React.useReducer(modelReducer, initialState);

  return {
    ...state,
    fetchUsers(user_id: number) {
      dsipatch({ type: SET_USERS, residents: [] });
    },
    setCurrentPage: (page: string) => {
      console.log("---------------page----------", page);
      dsipatch({ type: SET_CURRENT_PAGE, currentPage: page });
    },
    setSidebarOpen(sidebarStatus: boolean) {
      dsipatch({ type: PAGE_SIDEBAR, sidebarOpen: sidebarStatus });
    }
  };
}
