"use client";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/src/components/ui/collapsible";
import { Folder, FolderOpen } from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { cn } from "@/src/lib/cn";

import { catalogueLinks } from "../config/mapLinks.config";

const SidebarCollapse = ({ setIsOpen, isActive, setIsActive, isOpen }) => {
  const pathname = usePathname();

  const handleFolderClick = () => {
    if (!isActive || !isOpen) {
      setIsActive(true);
      setIsOpen(true);
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <Collapsible className="">
      <CollapsibleTrigger
        onClick={handleFolderClick}
        className={cn("flex items-center space-x-3 px-3  py-2 ", {
          "px-6": isActive === true,
        })}
      >
        <div className="flex items-center space-x-3 ">
          {isOpen === true ? <FolderOpen /> : <Folder />}
          {isActive && <span>Catalogo</span>}
        </div>
      </CollapsibleTrigger>
      {isOpen && (
        <CollapsibleContent className="rounded-lg space-x-2 px-3 py-2 pl-6 bg-slate-100 shadow-md dark:bg-slate-800">
          {catalogueLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={i}
                href={item.href}
                className={cn(
                  "flex items-center space-x-2 ml-2 pr-2 py-1  text-sm ",
                  {
                    " text-emerald-500": item.href === pathname,
                  }
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="ml-2">{item.title}</span>
              </Link>
            );
          })}
        </CollapsibleContent>
      )}
    </Collapsible>
  );
};

export default SidebarCollapse;
