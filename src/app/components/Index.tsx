"use client";
import { useContext, useState } from "react";
import { VmsContext } from "./hooks/context/VmsProvider";

// Dummy data for residents and sidebar menu
const residents = [
  { name: "John Doe", room: "101", status: "Active" },
  { name: "Jane Smith", room: "102", status: "Inactive" },
  { name: "Alice Johnson", room: "103", status: "Active" },
];

const sidebarMenu = [
  { icon: "🏠", label: "Dashboard", badge: 2 },
  { icon: "👥", label: "Residents", badge: 0 },
  { icon: "📦", label: "Packages", badge: 1 },
  { icon: "🔔", label: "Notifications", badge: 5 },
  { icon: "⚙️", label: "Settings", badge: 0 },
];

export default function Index() {
  const { fetchUsers, setCurrentPage, currentPage, sidebarOpen ,setSidebarOpen } = useContext(VmsContext);
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen font-[family-name:var(--font-geist-sans)] bg-gray-50">
      {/* Header */}
      <header className="relative flex items-center justify-between px-8 py-4 bg-white shadow">
        {/* Left: Avatar */}
        <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setSidebarOpen(true)}
        >
          <img
              src="https://i.pravatar.cc/40?img=3"
              alt="avatar"
              className="w-10 h-10 rounded-full border-2 border-gray-300"
          />
        </div>

        {/* Center: VMS */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-gray-800">
          VMS
        </h1>
      </header>


      {/* Sidebar (collapsible) */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          sidebarOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity ${
            sidebarOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setSidebarOpen(false)}
        />
        {/* Sidebar */}
        <aside
          className={`absolute left-0 top-0 h-full w-72 bg-white shadow-lg flex flex-col transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar header */}
          <div className="flex items-center gap-3 px-6 py-6 border-b">
            <img
              src="https://i.pravatar.cc/48?img=3"
              alt="avatar"
              className="w-12 h-12 rounded-full border-2 border-gray-300"
            />
            <div>
              <div className="font-semibold text-lg text-gray-800">Alex Johnson</div>
              <div className="text-sm text-gray-500">alex.johnson@email.com</div>
            </div>
            <button
              className="ml-auto text-gray-400 hover:text-gray-700"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              ✕
            </button>
          </div>
          {/* Sidebar menu */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {sidebarMenu.map((item, idx) => (
                <li key={item.label}>
                  <a
                    href="#"
                    className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-100 transition group"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="flex-1 text-gray-700 font-medium">{item.label}</span>
                    {item.badge > 0 && (
                      <span className="ml-auto bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Sidebar footer */}
          <div className="px-6 py-4 border-t">
            <button className="w-full text-left text-red-500 hover:underline font-medium">
              Logout
            </button>
          </div>
        </aside>
      </div>

      {/* Main content */}
      <main className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Residents List</h2>
        <ul className="divide-y">
          {residents.map((res, idx) => (
            <li key={res.name} className="py-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-500">
                {res.name[0]}
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{res.name}</div>
                <div className="text-sm text-gray-500">Room: {res.room}</div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  res.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {res.status}
              </span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
