"use client";
import React from "react";
import {
  User,
  Bell,
  LayoutDashboard,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import notifications from "./mock/notificationsMockup.json";
import Notifications from "./notifications/Notifications.navbar.jsx";

import ThemeSwitcher from "./ThemeSwitcher";

import logo_light_mode from "@/public/logo_light_mode.png";
const Navbar = ({ user, toggleActive }) => {

  return (
    <div className="flex items-center justify-between bg-white dark:bg-slate-800 text-emerald-700 h-20 py-8 fixed top-0 w-full px-8 z-40 pl-[6.5rem] ">
      <Link className="" href="#">
        <Image
          src={logo_light_mode}
          alt="Naturalmente bom Logo"
          className="w-16 py-4"
        />
      </Link>

      <div className="flex space-x-2 text-green-600">
        <ThemeSwitcher />

        <div className="relative inline-flex items-center pr-2 text-sm font-medium text-center text-white bg-transparent rounded-lg">
          <DropdownMenu className="relative inline-flex items-center pr-2 text-sm font-medium text-center text-white bg-transparent rounded-lg">
            <DropdownMenuTrigger>
              <Bell className="text-green-600" />
              <span className="sr-only">Notificaçõees</span>
              {user.userNotification > 0 ? (
                <div
                  data-testid="userNotification"
                  className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-1 dark:border-gray-900"
                >
                  {user.userNotification}
                </div>
              ) : null}
            </DropdownMenuTrigger>

            <Notifications data={notifications} image={user.userProfileImage} />
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
              <User className="text-green-600" />
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-4 py-2 pr-8">
            <DropdownMenuLabel>Configurações</DropdownMenuLabel>
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
                <span>Editar perfil</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sair</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
