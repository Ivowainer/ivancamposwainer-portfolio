import { FaGraduationCap } from "react-icons/fa";

import TitleSection from "@/components/general/TitleSection";
import Bookmark from "./Bookmark";

import { education } from "../../../../constants";

const EducationSection = () => {
    return (
        <div className="w-full">
            <TitleSection title="Education" icon={<FaGraduationCap className="text-3xl" />} />
            <div className="flex flex-col">
                {education.EDUCATION.map((val, i) => (
                    <Bookmark key={val.title} lastItem={i == education.EDUCATION.length - 1} education={val} />
                ))}
            </div>
        </div>
    );
};

export default EducationSection;
