"use client"
import React, {useState} from "react";
import Link from "next/link";
import logo from "@/public/thumbnail.jpg";
import Image from "next/image";
import { cn }from '@/src/lib/cn'
import { LayoutGrid, Users, User, Settings, Compass, Wheat, ShoppingBasket, Cloudy, Folder } from "lucide-react";
const Sidebar = () => {
  const [active, setActive] = useState(1)
  
  return (
    <div className="bg-slate-50 dark:bg-slate-700 space-y-6 w-64 h-screen text-emerald-700 dark:text-slate-50 shadow-md px-6 py-4 fixed left-0 top-0 z-42 ">
      <Link className="" href="#">
        <Image src={logo} alt="Naturalmente bom Logo" className="w-36  px-6 py-4" />
      </Link>
      <div className="space-y-3 flex flex-col mt-14">
        <Link href="/dashboard"  className={cn("flex items-center space-x-2 px-6 py-2 border-l-4", {"border-green-600" : active === 1})}>
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        <Link href="#" className={cn("flex items-center space-x-2 px-6 py-2 border-l-4", {"border-green-600" : active === 2})}>
        <Folder />
        <span>Catalogue</span>
        </Link>
        <Link href="#" className={cn("flex items-center space-x-2 px-6 py-2 border-l-4", {"border-green-600" : active === 3})}>
          <Users />
          <span>Customers</span>
        </Link>
        <Link href="#" className={cn("flex items-center space-x-2 px-6 py-2 border-l-4", {"border-green-600" : active === 4})}>
          <ShoppingBasket />
          <span>Markets</span>
        </Link>
        <Link href="#" className={cn("flex items-center space-x-2 px-6 py-2 border-l-4", {"border-green-600" : active === 5})}>
          <Wheat /> 
          <span>Farmers</span>
          </Link>
        <Link href="#" className={cn("flex items-center space-x-2 px-6 py-2 border-l-4", {"border-green-600" : active === 6})}>
          <Compass />
          <span>Orders</span>
        </Link>
        <Link href="#" className={cn("flex items-center space-x-2 px-6 py-2 border-l-4", {"border-green-600" : active === 7})}>
          <User />
          <span>Staff</span>
        </Link>
        <Link href="#" className={cn("flex items-center space-x-2 px-6 py-2 border-l-4", {"border-green-600" : active === 8})}>
          <Settings />
          <span>Settings</span>
        </Link>
        <Link href="#" className={cn("flex items-center space-x-2 px-6 py-2 border-l-4", {"border-green-600" : active === 9})}>
          <Cloudy />
          <span>Online store</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
