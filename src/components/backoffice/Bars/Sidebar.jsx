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
  User,
  Settings,
  Truck,
  Wheat,
  Warehouse,
  Cloudy,
  Folder,
  FolderOpen
} from "lucide-react";
import { useTheme } from "next-themes";
const Sidebar = () => {
  const [active, setActive] = useState(1);

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
        <button onClick={() => setActive(1)}>
          <Link
            href="/dashboard"
            className={cn("flex items-center space-x-2 px-6 py-2 border-l-4", {
              "border-green-600": active === 1,
            })}
          >
            <LayoutGrid />
            <span>Dashboard</span>
          </Link>
        </button>
        <button onClick={() => setActive(2)}>
          <Link
            href="#"
            className={cn("flex items-center space-x-2 px-6 py-2 border-l-4", {
              "border-green-600": active === 2,
            })}
          >
            {
              active === 2 ? ( <FolderOpen /> ) : ( <Folder /> )
            }
            <span>Catalogue</span>
          </Link>
        </button>
        <button onClick={() => setActive(3)}>
          <Link
            href="#"
            className={cn("flex items-center space-x-2 px-6 py-2 border-l-4", {
              "border-green-600": active === 3,
            })}
          >
            <Users />
            <span>Customers</span>
          </Link>
        </button>
        <button onClick={() => setActive(4)}>
          <Link
            href="#"
            className={cn("flex items-center space-x-2 px-6 py-2 border-l-4", {
              "border-green-600": active === 4,
            })}
          >
            <Warehouse  className={cn("", {
              "swing_15deg" : active === 4
            })}/>
            <span>Markets</span>
          </Link>
        </button>
        <button onClick={() => setActive(5)}>
          <Link
            href="#"
            className={cn("flex items-center space-x-2 px-6 py-2 border-l-4", {
              "border-green-600": active === 5,
            })}
          >
            <Wheat />
            <span>Farmers</span>
          </Link>
        </button>
        <button onClick={() => setActive(6)}>
          <Link
            href="#"
            className={cn("flex items-center space-x-2 px-6 py-2 border-l-4", {
              "border-green-600": active === 6,
            })}
          >
            <Truck />
            <span>Orders</span>
          </Link>
        </button>
        <button onClick={() => setActive(7)}>
          <Link
            href="#"
            className={cn("flex items-center space-x-2 px-6 py-2 border-l-4", {
              "border-green-600": active === 7,
            })}
          >
            <User />
            <span>Staff</span>
          </Link>
        </button>
        <button onClick={() => setActive(8)}>
          <Link
            href="#"
            className={cn("flex items-center space-x-2 px-6 py-2 border-l-4", {
              "border-green-600": active === 8,
            })}
          >
            <Settings className={cn("", {
              "animate-[spin_0.5s_ease-in-out]" : active === 8
            })}/>
            <span>Settings</span>
          </Link>
        </button>

        <button onClick={() => setActive(9)}>
          <Link
            href="#"
            className={cn("flex items-center space-x-2 px-6 py-2 border-l-4", {
              "border-green-600": active === 9,
            })}
          >
            <Cloudy />
            <span>Online store</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
