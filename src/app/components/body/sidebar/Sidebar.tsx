import { useState } from "react";
import { FaUser, FaTrophy, FaCloudDownloadAlt } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FiUsers, FiBell, FiStar, FiCloud } from "react-icons/fi";
import { MdOutlineExpandMore } from "react-icons/md";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showDownloads, setShowDownloads] = useState(true);

  return (
    <div
      className={`h-screen bg-[#1e1e3f] text-white transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      } flex flex-col`}
    >
      {/* Toggle Button */}
      <div className="relative p-2 text-right">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 bg-[#3d3d65] text-white rounded-full p-1"
        >
          ❯
        </button>
      </div>

      {/* User */}
      <div className="flex items-center gap-3 p-4">
        <img src="/avatar.jpg" alt="User" className="w-10 h-10 rounded-full" />
        {!collapsed && (
          <div>
            <p className="text-sm text-gray-400">Hello</p>
            <p className="font-semibold">Sara R.</p>
          </div>
        )}
      </div>

      <div className="flex-1">
        <ul className="space-y-2 text-sm px-2">
          <SidebarItem
            icon={<FiUsers />}
            text="Online Friends"
            badge="3"
            collapsed={collapsed}
          />
          <SidebarItem
            icon={<IoChatbubbleEllipsesSharp />}
            text="Chat"
            collapsed={collapsed}
          />
          <SidebarItem
            icon={<FaTrophy />}
            text="Trophy"
            collapsed={collapsed}
          />
          <SidebarItem
            icon={<FiStar />}
            text="Daily Challenges"
            collapsed={collapsed}
          />
          <SidebarItem
            icon={<FiBell />}
            text="Notifications"
            badge="9"
            collapsed={collapsed}
          />
          <SidebarItem icon={<FiCloud />} text="Cloud" collapsed={collapsed} />

          {/* Downloads Section */}
          <div>
            <button
              onClick={() => setShowDownloads(!showDownloads)}
              className="flex items-center gap-2 w-full text-left px-2 py-2 hover:bg-[#2e2e54] rounded"
            >
              <FaCloudDownloadAlt />
              {!collapsed && (
                <div className="flex justify-between w-full">
                  <span>Downloads</span>
                  <MdOutlineExpandMore
                    className={`transition-transform ${
                      showDownloads ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
            </button>
            {showDownloads && (
              <ul className="ml-8 space-y-1 mt-1 text-xs">
                <li>🎮 FIFA 2022</li>
                <li>🃏 POKER Zynga</li>
                <li>🔫 PUBG</li>
                <li>🧠 Valorant</li>
                <li>🧚‍♀️ Genshin Impact</li>
              </ul>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, badge, collapsed }: any) => (
  <li className="flex items-center gap-2 px-2 py-2 hover:bg-[#2e2e54] rounded relative">
    {icon}
    {!collapsed && <span className="flex-1">{text}</span>}
    {!collapsed && badge && (
      <span className="bg-yellow-400 text-black text-xs px-2 rounded-full">
        {badge}
      </span>
    )}
  </li>
);

export default Sidebar;
