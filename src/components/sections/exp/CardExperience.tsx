import Link from "next/link";
import { exp } from "../../../../constants";

const CardExperience = ({ experience }: { experience: exp.IExperience }) => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
                {experience.url ? (
                    <Link href={experience.url} target="_blank" className="text-lg font-semibold text-slate-700 dark:text-slate-200 underline">
                        {experience.name} • {experience.brand}
                    </Link>
                ) : (
                    <p className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                        {experience.name} • {experience.brand}
                    </p>
                )}
                <p className="text-sm text-slate-500 dark:text-slate-400">{experience.date}</p>
            </div>
            <ul className="list-disc flex flex-col gap-2 ml-5 text-slate-700 dark:text-gray-300 text-md">
                {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    );
};

export default CardExperience;
