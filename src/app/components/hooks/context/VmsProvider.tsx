"use client";
import React, { PropsWithChildren, createContext } from "react";
import { VmsScheme } from "../../types/VmsScheme";
import { useVms } from "../useVms";

export const VmsContext = createContext({} as VmsScheme);

const VmsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const state = useVms();
  return <VmsContext.Provider value={state}>{children}</VmsContext.Provider>;
};
export default VmsProvider;
