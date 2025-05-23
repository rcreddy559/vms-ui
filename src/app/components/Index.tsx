'use client';

import { useContext } from 'react';
import { VmsContext } from './hooks/context/VmsProvider';
import Sidebar from '@/app/components/body/sidebar/Sidebar';
import Dashboard from "@/app/components/body/dashboard/Dashboard";
import Header from "@/app/components/body/login/Header";
import WhatsAppLogin from "@/app/components/body/login/WhatsAppLogin";
import {PAGE_PROFILE, PAGE_RESIDENT_LIST} from "@/app/components/utils/Constants";
import UserProfileEdit from "@/app/components/body/profile/UserProfileEdit";
import {Resident} from "@/app/components/body/resident/Resident";
import ResidentList from "@/app/components/body/resident/ResidentList";


export default function Index() {
  const { isAuthenticated,currentPage } = useContext(VmsContext);

    const handleCurrentPage = () => {
        console.log("----------isAuthenticated, currentPage: ", isAuthenticated, currentPage);
        if(isAuthenticated) {
            return <WhatsAppLogin/>
        } else  if(currentPage === PAGE_PROFILE) {
            return <UserProfileEdit/>
        } else if(currentPage == PAGE_RESIDENT_LIST) {
            return <ResidentList/>
        }
        return <Dashboard/>
    }

  return (
      <div className="relative min-h-screen bg-gradient-to-b from-[#121436] to-[#52176c] text-white">
        <Header/>
          <Sidebar />
          {handleCurrentPage()}
      </div>
  );
}
