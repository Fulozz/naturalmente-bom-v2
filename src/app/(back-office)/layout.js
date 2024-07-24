"use client";
import React, { useState } from "react"; // Import useState hook if needed within layout

import Navbar from "@/src/components/backoffice/Bars/Navbar";
import Sidebar from "@/src/components/backoffice/Bars/Sidebar";
import profileImage from "./mock/image/profileImage.png";
import useOpenActiveState from "@/src/hooks/useOpenActiveState";

function Layout({ children }) {
   // Query of the database userInfo
   const user = {
    userId: 123,
    userFirstName: "Thiago",
    userFullName: "Thiago Silva Andrade",
    userEmail: "thiago.sandrade0720@gmail.com",
    userProfileImage: profileImage,
    userNotification: 10,
  };


  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="bg-slate-100 min-h-screen flex-grow w-full sm:ml24 ml-0">
          {/*TODO: Header*/}
          <Navbar user={user} />
          <main className="ml-24 p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 min-h-screen mt-16">
            {children}
          </main>
          {/*TODO: Main*/}
        </div>
        {/*TODO: Main Body*/}
      </div>
    </>
  );
}

export default Layout;
