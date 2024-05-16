"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo_light_mode from "@/public/logo_light_mode.png";
import logo_dark_mode from "@/public/logo_dark_mode.png";
import Image from "next/image";
import { cn } from "@/src/lib/cn";
import {
  LayoutGrid,
  Users,
  ContactRound,
  Settings,
  SquareUser,
  Truck,
  Warehouse,
  ExternalLink,
  Folder,
  FolderOpen
} from "lucide-react";

const Sidebar = () => {
  const [active, setActive] = useState(1);
  const sidebarLinks = [
    {
      title: "Dashboard",
      icon: LayoutGrid ,
      href:"/dashboard"
    },
    {
      title: "Catalogue",
      icon: Folder ,
      href:"/dashboard/catalogue"
      
    },
    {
      title: "Customers",
      icon: Users ,
      href: "/dashboard/customers"
    },
    {
      title: "Markets",
      icon: Warehouse,
      href:"/dashboard/markets"
    },
    {
      title: "Orders",
      icon: Truck ,
      href:"/dashboard/orders"
    },
    {
      title: "Farmers",
      icon: SquareUser,
      href:"/dashboard/farmers"
    },{
      title: "Staff",
      icon: ContactRound,
      href:"/dashboard/staff"
    },
    {
      title: "Settings",
      icon: Settings ,
      href:"/dashboard/settings"
    },
    ,
    {
      title: "Online Store",
      icon: ExternalLink ,
      href:"/dashboard/online_store"
    },
  ]
  return (
    <div className="bg-slate-50 dark:bg-slate-700 space-y-6 w-64 h-screen text-emerald-700 dark:text-slate-50 shadow-md px-6 py-4 fixed left-0 top-0 z-42 ">
      <Link className="" href="#">
        <Image
              src={logo_light_mode}
              alt="Naturalmente bom Logo"
              className="w-36  px-6 py-4"
            />
      </Link>

      <div className="space-y-3 flex flex-col mt-14">
        {
          sidebarLinks.map((item, i)=> {
            const Icon = item.icon
            return(
              <Link
                onClick={()=>setActive(i)}
                key={i}
                  href={item.href}
                  className={cn("flex items-center space-x-2 px-6 py-2 border-l-4", {
                    "border-green-600": active === i,
                    "" : item.title === "settings"
                  })}
                >
                  <Icon />
                  <span>{item.title}</span>
              </Link>
            );
          })
          }

        
      </div>
    </div>
  );
};

export default Sidebar;
