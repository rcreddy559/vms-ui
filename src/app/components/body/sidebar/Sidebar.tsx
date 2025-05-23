import { useContext, useState } from "react";
import { VmsContext } from "@/app/components/hooks/context/VmsProvider";
import {
  PAGE_PROFILE,
  URL_AVATAR_DEFAULT,
} from "@/app/components/utils/Constants";
import { sidebarMenuItems } from "../../utils/VmsUtils";

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen, setCurrentPage } =
    useContext(VmsContext);

  const handleProfile = (page: string) => {
    setSidebarOpen(!sidebarOpen);
    setCurrentPage(page);
  };

  return (
    <div
      className={`fixed inset-0 z-40 transition-all duration-300 ${
        sidebarOpen ? "visible" : "invisible pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close sidebar"
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          sidebarOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setSidebarOpen(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setSidebarOpen(false);
          }
        }}
      />

      {/* Sidebar */}
      <aside
        className={`absolute left-0 top-0 h-full w-72 bg-[#1e1e3f] text-white shadow-lg flex flex-col transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-4 px-6 py-5 border-b border-white/10">
          <a href="#" onClick={() => handleProfile(PAGE_PROFILE)}>
            <img
              src="{URL_AVATAR_DEFAULT}"
              alt="avatar"
              className="w-12 h-12 rounded-full border-2 border-white/20"
            />
            <div>
              <p className="text-xs text-gray-400">Hello</p>
              <p className="font-semibold text-white">Arjun Reddy</p>
            </div>
          </a>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {sidebarMenuItems.map((item) => (
              <li key={item.label}>
                <a
                  onClick={() => handleProfile(item.page)}
                  href="#"
                  className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-[#2e2e54] transition group"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="flex-1 text-white">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10">
          <button className="w-full text-left text-red-400 hover:underline font-medium">
            Logout
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
