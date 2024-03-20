import Image from "next/image";

const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row items-center gap-5">
            <div className="relative w-44 h-44 bg-indigo-100 dark:bg-gray-700/60 border-8 border-white shadow-lg rounded-full overflow-hidden">
                <Image src="/image_profile.jpg"  alt="Image Profile Ivan Campos Wainer" objectFit="cover" layout="fill" />
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-gray-700 font-bold text-3xl">Ivan Campos Wainer</p>
                <p className="text-gray-600 text-xl">Backend developer & LCC student (Computer Science)</p>
            </div>
        </header>
    );
};

export default Header;
