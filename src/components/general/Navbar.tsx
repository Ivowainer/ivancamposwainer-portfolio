"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
    const [showEmoji, setShowEmoji] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 200) {
                setShowEmoji(true);
            } else {
                setShowEmoji(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="mx-auto max-w-3xl sticky top-0 z-10">
            <div className="w-full bottom-0 static flex justify-between items-center py-1 px-5 z-20 bg-white bg-opacity-80 backdrop-blur-lg">
                <div className="flex items-center justify-center gap-3">
                    <div className={`${showEmoji ? "visible" : "invisible"} flex w-8 h-8`}>
                        <Image src="/logo.png" width={1920} height={1080} alt="Logo Ivan Campos Wainer Portfolio" />
                    </div>
                    <p className={`${showEmoji ? "visible" : "invisible"}  text-gray-500 font-semibold`}>Ivan Campos Wainer</p>
                </div>
                <button className="py-4 px-2 sm:py-5 flex items-center gap-4 outline-none">
                    <div className="text-2xl dark:block hidden text-slate-700">
                        <CiSun />
                    </div>
                    <div className="text-2xl dark:hidden text-slate-100">
                        <FaMoon />
                    </div>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
