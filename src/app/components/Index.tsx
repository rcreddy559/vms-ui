'use client';

import { useContext } from 'react';
import { VmsContext } from './hooks/context/VmsProvider';
import Sidebar from '@/app/components/body/sidebar/Sidebar';

const residents = [
  { name: 'John Doe', room: '101', status: 'Active' },
  { name: 'Jane Smith', room: '102', status: 'Inactive' },
  { name: 'Alice Johnson', room: '103', status: 'Active' },
];

export default function Index() {
  const {
    setCurrentPage,
    currentPage,
    sidebarOpen,
    setSidebarOpen,
  } = useContext(VmsContext);

  return (
      <div className="relative min-h-screen bg-gradient-to-b from-[#121436] to-[#52176c] text-white">
        {/* Header */}
        <header className="relative flex items-center justify-between px-6 py-4 bg-[#1e1e3f] shadow">
          {/* Left: Avatar */}
          <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setSidebarOpen(true)}
          >
            <img
                src="https://i.pravatar.cc/40?img=3"
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-white/30"
            />
          </div>

          {/* Center: VMS */}
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl font-bold text-white tracking-wide">
            VMS
          </h1>
        </header>

        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="max-w-3xl mx-auto mt-10 p-6 bg-white/10 rounded-xl backdrop-blur-md shadow-xl text-white">
          <h2 className="text-xl font-semibold mb-6">Residents List</h2>
          <ul className="divide-y divide-white/10">
            {residents.map((res) => (
                <li key={res.name} className="py-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
                    {res.name[0]}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{res.name}</div>
                    <div className="text-sm text-gray-300">Room: {res.room}</div>
                  </div>
                  <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          res.status === 'Active'
                              ? 'bg-green-200 text-green-900'
                              : 'bg-gray-400 text-white'
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
