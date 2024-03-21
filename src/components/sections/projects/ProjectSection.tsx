import TitleSection from "@/components/general/TitleSection";
import ProjectCard from "@/components/sections/projects/CardProject";
import { FaPencilAlt } from "react-icons/fa";

import CardMiniProject from "./CardMiniProject";

import { project } from "../../../../constants";

const ProjectSection = () => {
    return (
        <div className="w-full">
            <TitleSection title="Projects" icon={<FaPencilAlt />} />
            <div className="flex flex-col gap-10 mb-14">
                {project.PROJECTS.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-5">
                {project.MINI_PROJECTS.map((mp, i) => <CardMiniProject key={i} mini_project={mp} />)}
            </div>
        </div>
    );
};

export default ProjectSection;
