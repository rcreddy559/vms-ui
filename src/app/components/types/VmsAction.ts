import {
    IS_LOADING,
    REQUEST_ERROR,
    SET_USERS,
    SET_CURRENT_PAGE,
    PAGE_HOME, PAGE_SIDEBAR, SET_AUTHENTICATED, PAGE_PROFILE,
} from "../utils/Constants";
import { Resident } from "./Resident";

interface SetResidentsAction {
  type: typeof SET_USERS;
  residents: Resident[];
}

interface SetErrorAction {
  type: typeof REQUEST_ERROR;
  error: string;
}

interface IsLoading {
  type: typeof IS_LOADING;
}

interface SetCurrentPage {
  type: typeof SET_CURRENT_PAGE;
  currentPage: string;
}

interface SetSidebarOpen {
    type: typeof PAGE_SIDEBAR;
    sidebarOpen: boolean;
}

interface SetAuthenticated {
    type: typeof SET_AUTHENTICATED;

    isAuthenticated: boolean;
}

export type VmsAction =
  | SetErrorAction
  | IsLoading
  | SetResidentsAction
  | SetCurrentPage
  | SetSidebarOpen
  | SetAuthenticated;
