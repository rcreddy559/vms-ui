// src/pages/Login.tsx
import React, {useContext} from 'react';
import {VmsContext} from "@/app/components/hooks/context/VmsProvider";
import {URL_AVATAR_DEFAULT} from "@/app/components/utils/Constants";

const Header = () => {
    const {
        setSidebarOpen,
    } = useContext(VmsContext);
    return <header className="relative flex items-center justify-between px-6 py-4 bg-[#1e1e3f] shadow">
            {/* Left: Avatar */}
            <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => setSidebarOpen(true)}
            >
                <img
                    src={URL_AVATAR_DEFAULT}
                    alt="avatar"
                    className="w-10 h-10 rounded-full border-2 border-white/30"
                />
            </div>

            {/* Center: VMS */}
            <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl font-bold text-white tracking-wide">
                VMS
            </h1>
        </header>
};

export default Header;
