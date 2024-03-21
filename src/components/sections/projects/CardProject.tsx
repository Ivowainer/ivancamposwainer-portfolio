import Image from "next/image";
import Link from "next/link";

import { IoLinkSharp } from "react-icons/io5";

import { project } from "../../../../constants";

const ProjectCard = ({ project }: { project: project.IProject }) => {
    return (
        <article className="grid gap-4 sm:gap-7 md:grid-cols-2 grid-rows-1 group items-center justify-center">
            <Link href={project.url ? project.url : project.codeUrl!} target="_blank">
                <div className="relative rounded-xl overflow-hidden flex bg-gray-100 dark:bg-gray-700">
                    <Image className="rounded-lg duration-500 transition-all translate-x-5 translate-y-5 group-hover:translate-x-7 group-hover:translate-y-7" src={`/projects/${project.imageUrl}`} width={1920} height={1080} alt={`Project ${project.title} by Ivan Campos Wainer`} />
                </div>
            </Link>
            <div className="flex flex-col gap-2.5 justify-center py-4">
                <h3 className="font-bold text-3xl text-slate-800 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{project.description}</p>
                <div className="flex gap-4 items-center mb-1">
                    {project.icons.map((icon, i) => (
                        <div key={i} className="w-6">
                            {icon}
                        </div>
                    ))}
                </div>
                <div className="flex justify-start gap-3">
                    {project.codeUrl && (
                        <Link href={project.codeUrl!} target="_blank" className="text-lg px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg">
                            Code
                        </Link>
                    )}
                    {project.url && (
                        <Link href={project.url} target="_blank" className="flex gap-3 group/live hover:gap-6 transition-[gap] items-center text-lg py-2 px-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg">
                            Live
                            <div className="text-2xl group-hover/live:rotate-45 transition-transform">
                                <IoLinkSharp />
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
