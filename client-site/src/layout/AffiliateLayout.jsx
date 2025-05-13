import React from "react";
import { Outlet } from "react-router";
import AffHeader from "@/components/Affiliate/AffiliateHeader/AffHeader";
import AffSidebar from "@/components/Affiliate/AffiliateSidebar/AffSidebar";

const AffiliateLayout = () => {
  return (
    <>
      <div className="App h-screen flex flex-col">
        <AffHeader /> {/* Fixed height header */}
        <main className="flex flex-1 overflow-hidden">
          <div className="w-64 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-black border-r">
            <AffSidebar />
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default AffiliateLayout;
