import React from "react";
import Link from "next/link";
import logo from "@/public/thumbnail.jpg";
import Image from "next/image";
import { LayoutGrid, Users, User, Settings, Compass } from "lucide-react";
const Sidebar = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-700 space-y-6 w-64 h-screen text-emerald-700 dark:text-slate-50 shadow-md px-6 py-4 fixed left-0 top-0 z-42 ">
      <Link className="" href="#">
        <Image src={logo} alt="Naturalmente bom Logo" className="w-36  px-6 py-4" />
      </Link>
      <div className="space-y-3 flex flex-col mt-14">
        <Link href="/dashboard" className="flex items-center space-x-2 px-6 py-2 border-l-4 border-green-600">
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        <Link href="#">Catalogue</Link>
        <Link href="#" className="flex items-center space-x-2 px-6 py-2 border-l-4 border-green-600">
          <Users />
          <span>Customers</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 px-6 py-2 border-l-4 border-green-600">
          Markets
        </Link>
        <Link href="#">Farmers</Link>
        <Link href="#" className="flex items-center space-x-2 px-6 py-2 border-l-4 border-green-600">
          <Compass />
          <span>Orders</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 px-6 py-2 border-l-4 border-green-600">
          <User />
          <span>Staff</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 px-6 py-2 border-l-4 border-green-600">
          <Settings />
          <span>Settings</span>
        </Link>
        <Link href="#">Online store</Link>
      </div>
    </div>
  );
};

export default Sidebar;
