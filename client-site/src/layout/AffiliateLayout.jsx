import React, { useEffect } from "react";
import { Outlet } from "react-router";
import AffHeader from "@/components/Affiliate/AffiliateHeader/AffHeader";
import AffSidebar from "@/components/Affiliate/AffiliateSidebar/AffSidebar";

const AffiliateLayout = () => {
  useEffect(() => {
    // Meta viewport 
    const metaViewport = document.querySelector("meta[name='viewport']");
    
    if (metaViewport) {
      const originalContent = metaViewport.getAttribute("content");
      metaViewport.setAttribute("content", "width=1239");
      return () => {
        metaViewport.setAttribute("content", originalContent);
      };
    }
  }, []);

  return (
    <>
      <div className="App h-screen flex flex-col">
        <AffHeader /> {/* Fixed height header */}
        <main className="flex flex-1 overflow-hidden">
          <div className="w-56 h-full bg-black overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-black border-r">
            <AffSidebar />
          </div>
          <div className="flex-1 bg-bgPrimary overflow-y-auto p-4">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default AffiliateLayout;
