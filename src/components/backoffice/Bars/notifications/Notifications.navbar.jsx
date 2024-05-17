import React from 'react'
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
import { cn } from "@/src/lib/cn";
// TODO: retirar imagem e substituir por uma vindo do backend
const Notifications = ({data, image}) => {
    const notifications = data

  return (
    <DropdownMenuContent className="px-4 py-2 pr-8">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {
                notifications.slice(0, 7).map((item, i)=> {
                  return (
                  <div key={i}>
                    <DropdownMenuItem >
                      <div className="flex items-center space-x-2">
                        <Image
                            src={ image }
                            alt="User profile"
                            className="w-8 h-8 rounded-full"
                          />
                        <div className="flex flex-col space-y-2">
                          <span className="text-sm font-semibold">{item.name}</span>
                          <div className="flex items-center space-x-1">
                            <p className={
                              cn("rounded-full text-white py-0.5 px-3 text-sm", {
                                "bg-green-500": item.type === "stock in",
                                "bg-red-500": item.type === "stock out"
                              })
                            }>{item.stock}</p>
                            <p>{item.date}</p>
                          </div>
                        </div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                  </div>
                  ) 
                })
              }
            </DropdownMenuContent>
  )
}

export default Notifications