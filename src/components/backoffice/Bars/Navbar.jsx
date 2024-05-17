"use client"
import React, {useState} from "react";
import {
  Sun,
  User,
  AlignJustify,
  Bell,
  LayoutDashboard,
  Settings,
  X,
  LogOut 
} from "lucide-react";



import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import notifications from './mock/notificationsMockup.json'
import Notifications from './notifications/Notifications.navbar.jsx'
import { cn } from "@/src/lib/cn";
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = ({ user, setIsActive }) => {
  
  const [isActiveState, setIsActiveState] = useState(false); // Initial state

  const sidebarController = () => {
    setIsActiveState(!isActiveState); // Toggle state
    setIsActive(isActiveState); // Update parent state if provided
  };

  return (
    <div className={cn("flex items-center justify-between bg-slate-100 dark:bg-slate-800 text-slate-50 h-20 py-8 px-4 fixed top-0 w-full", {
      "pr-[17rem]" : isActiveState  === false
    })}>
      <button onClick={sidebarController}>
        <AlignJustify className="text-green-600" data-testid="AlignJustify" />
      </button>

      <div className="flex space-x-2 text-green-600">
        <ThemeSwitcher />
       
        <div className="relative inline-flex items-center pr-2 text-sm font-medium text-center text-white bg-transparent rounded-lg">
        <DropdownMenu className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-transparent rounded-lg">
          <DropdownMenuTrigger>
            <Bell className="text-green-600" data-testid="Bell" />
            <span className="sr-only">Notifications</span>
            {user.userNotification > 0 ? (
              <div
                data-testid="userNotification"
                className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-1 dark:border-gray-900"
              >
                {user.userNotification}
              </div>
            ) : null}
          </DropdownMenuTrigger>

          <Notifications data={notifications} image={user.userProfileImage}/>

        </DropdownMenu>
      </div>
      {/* Dropdown por si só já um botão */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              {user.userProfileImage != null ? (
                <Image
                  src={user.userProfileImage}
                  alt="User profile"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <User data-testid="UserIcon" className="text-green-600" />
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="px-4 py-2 pr-8">
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <Settings className="mr-2 h-4 w-4" />
                <span>Edit profile</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LogOut className="mr-2 h-4 w-4" />
                <span>LogOut</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
          </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
