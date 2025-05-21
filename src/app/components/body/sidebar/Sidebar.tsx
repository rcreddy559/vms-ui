import { useContext, useState } from "react";
import { VmsContext } from "@/app/components/hooks/context/VmsProvider";
import { MdOutlineExpandMore } from "react-icons/md";

// Sidebar menu items
const sidebarMenu = [
  { icon: "🏠", label: "Dashboard", badge: 0 },
  { icon: "👥", label: "Residents", badge: 0 },
  { icon: "📦", label: "Packages", badge: 1 },
  { icon: "🔔", label: "Notifications", badge: 5 },
  { icon: "⚙️", label: "Settings", badge: 0 },
];

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(VmsContext);

  return (
      <div
          className={`fixed inset-0 z-40 transition-all duration-300 ${
              sidebarOpen ? "visible" : "invisible pointer-events-none"
          }`}
      >
        {/* Overlay */}
        <div
            className={`absolute inset-0 bg-black/40 transition-opacity ${
                sidebarOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar */}
        <aside
            className={`absolute left-0 top-0 h-full w-72 bg-[#1e1e3f] text-white shadow-lg flex flex-col transition-transform duration-300 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* Header */}
          <div className="flex items-center gap-4 px-6 py-5 border-b border-white/10">
            <img
                src="https://i.pravatar.cc/48?img=3"
                alt="avatar"
                className="w-12 h-12 rounded-full border-2 border-white/20"
            />
            <div>
              <p className="text-xs text-gray-400">Hello</p>
              <p className="font-semibold text-white">Alex Johnson</p>
            </div>
            <button
                onClick={() => setSidebarOpen(false)}
                className="ml-auto text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Menu */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {sidebarMenu.map((item) => (
                  <li key={item.label}>
                    <a
                        href="#"
                        className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-[#2e2e54] transition group"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="flex-1 text-white">{item.label}</span>
                      {item.badge > 0 && (
                          <span className="bg-yellow-400 text-black text-xs font-semibold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                      )}
                    </a>
                  </li>
              ))}

              {/* Downloads Dropdown */}
              <li>

              </li>
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
