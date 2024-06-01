"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import logo_light_mode from "@/public/logo_light_mode.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/cn";
import { sidebarLinks } from "./config/mapLinks.config";
import { LayoutGrid, } from "lucide-react";

import SidebarCollapse from "./sidebarCollapse/SidebarCollapse.sidebar";
const Sidebar = ({ isActive, toggleActive, toggleOpen, isOpen }) => {

  const pathname = usePathname();

  
  
  return (
    <>
    <div className={cn("block w-24 bg-slate-50 dark:bg-slate-700 space-y-6  h-full text-emerald-700 dark:text-slate-50 shadow-md px-6 py-4 fixed left-0 top-20 z-40", {
     "block w-64" : isActive === true

    })}>
      
      <Link className="justify-center" href="#">
        <Image
          src={logo_light_mode}
          alt="Naturalmente bom Logo"
          className="w-20 py-4"
        />
      </Link>

      <div className="space-y-3 flex flex-col mt-14">
        <Link
          href="/dashboard"
          className={cn("flex items-center space-x-3 px-3  py-2 ", {
            "border-emerald-600 text-emerald-500 border-l-4 px-6 ":
              isActive === true &&
              pathname === "/dashboard",
              "text-emerald-500": isActive === false && pathname === "/dashboard",
              "px-6" : isActive === true && pathname != "/dashboard"
          })}
        >
          <LayoutGrid />
          {
            isActive && <span>Dashboard</span> 
          }
        </Link>

          <SidebarCollapse toggleOpen={toggleOpen} isActive={isActive} toggleActive={toggleActive}  isOpen={isOpen}/>
          

   
          {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={i}
              href={item.href}
              className={cn("flex items-center space-x-3 px-3 py-2 ", {
                "border-emerald-600 text-emerald-500 border-l-4 px-6 ":
                  isActive === true &&
                  item.href === pathname,
                  "text-emerald-500": isActive === false && item.href === pathname,
                  "px-6" : isActive === true && item.href != pathname
              })}
            >
              <Icon />
              { isActive && <span>{item.title}</span> }
            </Link>
          );
        })}
        <div className="px-6 py-2 ">
        </div>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
