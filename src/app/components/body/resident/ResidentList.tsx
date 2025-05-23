// src/pages/Dashboard.tsx
import React from 'react';
const residents = [
  { name: 'John Doe--', room: '101', status: 'Active' },
  { name: 'Jane Smith', room: '102', status: 'Inactive' },
  { name: 'Alice Johnson', room: '103', status: 'Active' },
];

const ResidentList = () => {
  return (
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
  );
};

export default ResidentList;
