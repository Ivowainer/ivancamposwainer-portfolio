"use client"

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

const SwitchTheme = () => {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])
    
    if(!mounted) return (
        <p>loading</p>
    )


    if(resolvedTheme == 'light')
        return <p><CiSun onClick={() => setTheme('dark')} className="text-2xl cursor-pointer" /></p>

    if(resolvedTheme == 'dark'){
        return <p><FaMoon onClick={() => setTheme('light')} className="text-2xl cursor-pointer" /></p>
    }

    /* return (
            <div className="text-2xl dark:hidden text-slate-700">
                <CiSun onClick={() => setTheme('dark')}  />
            </div>
            <div onClick={() => setTheme('light')} className="text-2xl dark:block hidden text-slate-100">
                <FaMoon />
            </div>
    ); */
};

export default SwitchTheme;
