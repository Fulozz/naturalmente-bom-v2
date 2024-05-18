"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo_light_mode from "@/public/logo_light_mode.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/cn";
import { sidebarLinks, catalogueLinks } from "./config/mapLinks.config";
import { LayoutGrid, LogOut, Folder, FolderOpen, ChevronRight, Minus } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/src/components/ui/collapsible";
const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const folderController = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="bg-slate-50 dark:bg-slate-700 space-y-6 w-64 h-screen text-emerald-700 dark:text-slate-50 shadow-md px-6 py-4 fixed left-0 top-0 z-50 ">
      <Link className="" href="#">
        <Image
          src={logo_light_mode}
          alt="Naturalmente bom Logo"
          className="w-36  px-6 py-4"
        />
      </Link>

      <div className="space-y-3 flex flex-col mt-14">
        <Link
          href="/dashboard"
          className={cn("flex items-center space-x-3 px-6 py-2 ", {
            "border-emerald-600 text-emerald-500 border-l-4":
              pathname === "/dashboard",
          })}
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>


          <Collapsible>
            <CollapsibleTrigger 
              onClick={folderController}
              className={cn("flex items-center space-x-6 px-6 py-2", {
                    "border-emerald-600 text-emerald-500": null,
                  })}>
                  <div className="flex items-center space-x-3 ">
                    {
                      isOpen === true ? <FolderOpen /> : <Folder />
                    }
                    <span>Catalogo</span>
                  </div>
                  <ChevronRight />
            </CollapsibleTrigger>
            {catalogueLinks.map((item, i) => {
              return (
                <CollapsibleContent key={i} className="px-3 pl-6" >
                  <Link
                    href={item.href}
                    className={cn("flex items-center space-x-3 px-6 py-2 pl-6 ", {
                      " text-emerald-500":
                        item.href === pathname,
                    })}
                  >
                    <Minus />
                    <span className="text-sm">{item.title}</span>
                  </Link>
                </CollapsibleContent>
              );
            })}
          </Collapsible>

   
        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={i}
              href={item.href}
              className={cn("flex items-center space-x-3 px-6 py-2 ", {
                "border-l-4 border-emerald-600 text-emerald-500":
                  item.href === pathname,
              })}
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2 ">
          <button className=" bg-green-600 text-white items-center justify-center text-bold rounded-md flex space-x-3 px-6 py-3">
            <LogOut />
            <span>Sair</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
