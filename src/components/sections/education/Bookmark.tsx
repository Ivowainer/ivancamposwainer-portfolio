import { BiBookmark } from "react-icons/bi";
import { education } from "../../../../constants";

export interface BookmarkProps {
    education: education.IEducation;
    lastItem?: boolean;
}

const Bookmark = ({ lastItem, education }: BookmarkProps) => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-3 ">
                <div>
                    <div className="bg-emerald-300 dark:bg-emerald-500 p-2 flex justify-center items-center text-white rounded-full">
                        <BiBookmark />
                    </div>
                    {!lastItem && <div className={`ml-[.98rem] w-[.5px] ${education.height ? education.height : "h-48 lg:h-32"} block bg-gray-300`}></div>}
                </div>

                <div className="flex flex-col gap-1 left-12 top-[.5px]">
                    <p className="font-semibold text-gray-800 dark:text-gray-100">{education.title}</p>
                    <p className="font-normal text-sm text-gray-400 dark:text-gray-500">{education.date}</p>
                    <p className="font-normal text-gray-500 dark:text-gray-300">{education.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Bookmark;