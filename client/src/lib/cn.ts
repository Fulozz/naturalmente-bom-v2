import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


// This function is a wrapper around the clsx function from the clsx package.
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));