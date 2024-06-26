"use client";
import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/cn";
import { sidebarLinks } from "./config/mapLinks.config";
import { LayoutGrid, AlignJustify } from "lucide-react";
import useOpenActiveState from "@/src/hooks/useOpenActiveState";

import SidebarCollapse from "./sidebarCollapse/SidebarCollapse.sidebar";

const Sidebar = () => {
  const pathname = usePathname();
  const { setIsActive, isActive, setIsOpen, isOpen } = useOpenActiveState(); // Get state from hook

  const sidebarController = () => {
    if (isOpen || isActive) {
      setIsActive(false);
      setIsOpen(false);
    }
    setIsActive(!isActive);
  };

  const handleOverlay = () => {
    setIsActive(false);
    setIsOpen(false);
  };

  return (
    <>
      {isActive === true && (
        <div
          className="fixed inset-0 z-40 bg-black/50" // Adjust opacity as needed
          onClick={handleOverlay} // Close sidebar and overlay on click
        />
      )}

      <div
        className={cn(
          "block w-24 bg-slate-50 dark:bg-slate-700 space-y-6  h-full text-slate-700 dark:text-slate-50 shadow-md px-6 py-4 fixed left-0 top-0 z-50",
          {
            "block w-64 overflow-y-scroll": isActive === true,
          }
        )}
      >
        <button className="px-3 py-2 border-white" onClick={sidebarController}>
          <AlignJustify className="text-green-600" />
        </button>

        <div className="space-y-3 flex flex-col mt-14">
          <Link
            href="/dashboard"
            className={cn("flex items-center space-x-3 px-3 py-2 ", {
              "border-emerald-600 text-emerald-500 border-l-4 px-6 ":
                isActive === true && pathname === "/dashboard",
              "text-emerald-500":
                isActive === false && pathname === "/dashboard",
              "px-6": isActive === true && pathname != "/dashboard",
            })}
          >
            <LayoutGrid />
            {isActive && <span>Dashboard</span>}
          </Link>

          <SidebarCollapse
            setIsOpen={setIsOpen}
            isActive={isActive}
            setIsActive={setIsActive}
            isOpen={isOpen}
          />

          {sidebarLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={i}
                href={item.href}
                className={cn("flex items-center space-x-3 px-3 py-2 ", {
                  "border-emerald-600 text-emerald-500 border-l-4 px-6 ":
                    isActive === true && item.href === pathname,
                  "text-emerald-500":
                    isActive === false && item.href === pathname,
                  "px-6": isActive === true && item.href != pathname,
                })}
              >
                <Icon />
                {isActive && <span>{item.title}</span>}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
