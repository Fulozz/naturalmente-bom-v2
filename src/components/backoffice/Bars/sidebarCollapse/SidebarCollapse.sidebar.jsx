"use client"
import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/src/components/ui/collapsible";

import { Folder, FolderOpen, Minus } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/cn";
import { catalogueLinks } from "../config/mapLinks.config";
const SidebarCollapse = ({setIsOpen}) => {
    const isOpen = setIsOpen;
    const pathname = usePathname();
    const folderController = () => {
        setIsOpen(!isOpen)
      }

  return (
    <Collapsible className="">
            <CollapsibleTrigger 
              onClick={folderController}
              className={cn(" flex items-center space-x-6 px-6 py-2", {
                    "border-emerald-600 text-emerald-500": null,
                  })}>
                  <div className="flex items-center space-x-3 ">
                    {
                      isOpen === true ? <FolderOpen /> : <Folder />
                    }
                    <span>Catalogo</span>
                  </div>
            </CollapsibleTrigger>
            <CollapsibleContent  className="rounded-lg space-x-6 px-3 py-2 pl-6 dark:bg-slate-800 " >
            {catalogueLinks.map((item, i) => {
                const Icon = item.icon
                return (
                        <Link 
                            key={i}
                            href={item.href}
                            className={cn("flex items-center space-x-3 py-1 text-sm ", {
                            " text-emerald-500":
                                item.href === pathname,
                            })}
                        >
                            <Icon classname="w-4 h-4" />
                            <span>{item.title}</span>
                        </Link>
                    );
                })}
            </CollapsibleContent>
          </Collapsible>
  )
}

export default SidebarCollapse