"use client";
import React, { useState } from "react";
import Navbar from "@/src/components/backoffice/Bars/Navbar";
import Sidebar from "@/src/components/backoffice/Bars/Sidebar";
import profileImage from "./mock/image/profileImage.png";
import { cn } from "@/src/lib/cn";
const layout = ({ children }) => {
  const [isActive, setIsActive] = useState(true);

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
    <div className="flex">
      {isActive ? <Sidebar /> : null}
      <div
        className={cn("bg-slate-100 min-h-screen w-full", {
          "ml-64": isActive === true,
        })}
      >
        {/*TODO: Header*/}
        <Navbar user={user} setIsActive={setIsActive} />
        <main className="p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 mt-16">
          {children}
        </main>
        {/*TODO: Main*/}
      </div>
      {/*TODO: Main Body*/}
    </div>
  );
};

export default layout;
