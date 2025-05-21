import { Residents } from "./Residents";

export interface VmsState extends Residents {
  isLoading: boolean;
  error: Error | null;
  inputErrorMessage: string;
  currentPage: string;
  sidebarOpen: boolean;
  isAuthenticated: boolean;
}
