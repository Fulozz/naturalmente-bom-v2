"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from '@/src/app/api/uploadthing/core'
const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
