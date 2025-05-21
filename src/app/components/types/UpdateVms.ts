export interface VmsStocks {
  fetchUsers(user_id: number): void;
  setCurrentPage(page: string): void;
  setSidebarOpen: (open: boolean) => void;
}
