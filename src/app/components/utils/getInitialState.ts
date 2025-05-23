import { VmsState } from "../types/VmsState";

export function getInitialState(): VmsState {
  return {
    resident: [],
    currentPage: '',
    sidebarOpen: false,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    inputErrorMessage:'',
  } ;
}
