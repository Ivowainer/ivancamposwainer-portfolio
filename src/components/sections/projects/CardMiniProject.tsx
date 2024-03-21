import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

import { project } from "../../../../constants";

const CardMiniProject = ({ mini_project }: { mini_project: project.IMiniProject }) => {
    return (
        <Link href={mini_project.url} target="_blank" className="block group border-2 border-gray-100 hover:border-gray-200 rounded-xl shadow_translate-transition hover:sm:shadow transition-all duration-200 sm:hover:-translate-y-1">
            <div className="relative flex flex-col justify-between h-full w-full py-6 px-7">
                <p className="text-gray-700 text-lg font-bold">{mini_project.title}</p>
                <p className="text-slate-400 text-sm">{mini_project.description}</p>
                <div className="flex gap-1 mt-1.5 items-center">
                    {mini_project.icons.map((val, i) => (
                        <div key={i} className="w-6">
                            {val}
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute grid place-items-center right-3 top-3 bg-white w-9 h-9 rounded-full scale-0 group-hover:scale-90 transition-transform border-0 border-slate-100 border-indigo-100/50 shadow-sm">
                <MdArrowOutward className="text-gray-400 text-2xl" />
            </div>
        </Link>
    );
};

export default CardMiniProject;
