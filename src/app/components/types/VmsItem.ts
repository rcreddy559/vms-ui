import { ReactNode } from "react";

export default interface VmsItem {
  icon: ReactNode;
  label: string;
  value: number;
  page: string;
}
