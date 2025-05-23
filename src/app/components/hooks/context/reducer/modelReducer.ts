import {
  SET_USERS,
  SET_CURRENT_PAGE,
  USERS_LIST, PAGE_SIDEBAR,
  SET_AUTHENTICATED, PAGE_PROFILE
} from "../../../utils/Constants";
import { VmsState } from "../../../types/VmsState";
import { VmsAction } from "@/app/components/types/VmsAction";

export function modelReducer(state: VmsState, action: VmsAction): VmsState {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        resident: action.residents,
        currentPage: USERS_LIST,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

      case PAGE_SIDEBAR:
        return {
            ...state,
            sidebarOpen: action.sidebarOpen,
        };
    case SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      }

    default:
      return { ...state };
  }
}
