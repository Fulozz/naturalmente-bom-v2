"use client";
import React, {useState, useEffect, use} from 'react'
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { cn } from './../../../lib/cn';

const ThemeSwitcher = () => {
    
    const [mounted, setMounted] = useState(false);;
    const { theme, setTheme } = useTheme();
    // cada vez que atualiza remonta a página
    useEffect(() => setMounted(true), []);
    // verifica se já foi atualizado
    if (!mounted) return null;
  return (
    <div>
        <button className={cn("w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-100 dark:bg-slate-800",{
            "text-slate-800 dark:text-slate-50": theme === 'light',
            "text-slate-50 dark:text-slate-800": theme === 'dark',
        })} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}> {theme === 'light' ? <Moon className="text-green-600" /> : <Sun className="text-green-600"/>} </button>
    </div>
  )
}
export default ThemeSwitcher