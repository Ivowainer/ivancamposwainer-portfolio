import Image from "next/image";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { FaBullseye } from "react-icons/fa";

const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row items-center gap-5">
            <div className="relative w-44 h-44 bg-indigo-100 dark:bg-gray-700/60 border-8 border-white dark:border-gray-900/80 shadow-lg rounded-full overflow-hidden">
                <Image src="/image_profile.jpg" alt="Image Profile Ivan Campos Wainer" objectFit="cover" layout="fill" />
            </div>
            <div className="flex flex-col gap-3 items-center sm:items-start">
                <p className="text-gray-700 dark:text-slate-100 font-bold text-3xl">Ivan Campos Wainer</p>
                <p className="text-gray-500 dark:text-slate-300 text-sm sm:text-lg">Backend developer & LCC student (Computer Science)</p>
                <div className="flex gap-3">
                    <div className="relative">
                        <div className="tooltip-container p-2.5 rounded-xl grid place-items-center bg-emerald-200 dark:bg-emerald-500 text-emerald-600 dark:text-emerald-200">
                            <p className="tooltip-child hidden bg-gray-700 dark:bg-white text-white dark:text-gray-800 bottom-[3.30rem] text-xs px-2 py-1 rounded-md">Looking for a job</p>
                            <FaBullseye />
                        </div>
                    </div>
                    <button className="flex items-center text-sm gap-3 bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2 px-4 rounded-lg font-semibold">
                        <BsFillFileEarmarkPersonFill />
                        Resume
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
