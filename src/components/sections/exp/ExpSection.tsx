import { FaBriefcase } from "react-icons/fa";
import CardExperience from "@/components/sections/exp/CardExperience";
import TitleSection from "@/components/general/TitleSection";

import { exp } from "../../../../constants";

const ExpSection = () => {
    return (
        <div className="w-full">
            <TitleSection title="Experience" icon={<FaBriefcase className="text-3xl" />} />
            <div className="flex flex-col gap-7">
                {exp.EXPERIENCE.map((exp) => (
                    <CardExperience key={exp.name} experience={exp} />
                ))}
            </div>
        </div>
    );
};

export default ExpSection;
