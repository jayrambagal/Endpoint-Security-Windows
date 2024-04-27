import DashboardData from "@/components/dashboardData";
import Settings from "@/components/settingsData";
import Sitebar from "@/components/sidebar";
import Support from "@/components/supports";
import React from "react";
import {Route, Routes} from "react-router-dom";

export const Dashboard: React.FC = (): JSX.Element => {
  console.log(window?.location.href);

  return (
    <div className="w-full h-full flex">
      <Sitebar />
      <div className="fixed w-[76%] right-0 top-0 h-screen px-5 py-2">
        <Routes>
          <Route path="/" element={<DashboardData />} />
          <Route path="dashboard/settings" element={<Settings />} />
          <Route path="dashboard/support" element={<Support />} />
          <Route path="dashboard/about" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};
