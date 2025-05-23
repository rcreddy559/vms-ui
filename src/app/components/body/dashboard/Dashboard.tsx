// src/pages/Dashboard.tsx
import React, {useContext} from "react";
import {dashboardItems} from "@/app/components/utils/VmsUtils";
import {VmsContext} from "@/app/components/hooks/context/VmsProvider";

const Dashboard = () => {
    const { sidebarOpen, setSidebarOpen, setCurrentPage } =
        useContext(VmsContext);
  return (
    <main className="max-w-3xl mx-auto mt-10 p-6 bg-white/10 rounded-xl backdrop-blur-md shadow-xl text-white">
      <h2 className="text-xl font-semibold mb-6 text-center">Dashboard</h2>
      <ul className="divide-y divide-white/10">
        {dashboardItems.map((res) => (
          <li key={res.label} >
              <a href="#" onClick={()=> {setCurrentPage(res.page)}} className="py-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
                  {res.icon}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{res.label}</div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10">
                  {res.value}
                </span>
              </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Dashboard;
