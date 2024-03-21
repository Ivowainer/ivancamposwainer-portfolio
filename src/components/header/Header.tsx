import Image from "next/image";
import { FaBullseye } from "react-icons/fa";

const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row items-center gap-5">
            <div className="relative w-44 h-44 bg-indigo-100 dark:bg-gray-700/60 border-8 border-white shadow-lg rounded-full overflow-hidden">
                <Image src="/image_profile.jpg" alt="Image Profile Ivan Campos Wainer" objectFit="cover" layout="fill" />
            </div>
            <div className="flex flex-col gap-3 items-center sm:items-start">
                <p className="text-gray-700 font-bold text-3xl">Ivan Campos Wainer</p>
                <p className="text-gray-500 text-sm sm:text-lg">Backend developer & LCC student (Computer Science)</p>
                <div className="flex gap-3">
                    <div className="relative">
                        <div className="tooltip-container p-2.5 rounded-xl grid place-items-center bg-emerald-200 text-emerald-600">
                            <p className="tooltip-child hidden bg-gray-700 text-white bottom-[3.30rem] text-xs px-2 py-1 rounded-md">Looking for a job</p>
                            <FaBullseye />
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
