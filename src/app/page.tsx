import TitleSection from "@/components/general/TitleSection";
import Header from "@/components/header/Header";
import CardExperience from "@/components/sections/exp/CardExperience";
import { FaBriefcase } from "react-icons/fa";

export interface IExperience {
    name: string;
    brand: string;
    date: string;
    points: string[];
}

const EXPERIENCE: IExperience[] = [
    {
        name: "Frontend Project Freelance",
        date: "December 2022 - January 2023",
        brand: "Clinica Selva Amazonica",
        points: ["Development of responsive user interfaces for mobile devices and desktops", "Personalized content through CMS Sanity", "Teamwork and division of tasks; using git for coordination", "Development and integration of customized IT solution"],
    },
    {
        name: "Dashboard Fullstack Project Freelance",
        date: "January 2024",
        brand: "Sancino Tour",
        points: [
            "CRUD for employee management, vouchers and history (resume)",
            "Development of responsive user interfaces for mobile devices and desktops (frontend)",
            "Charts and statistics of the created records (frontend)",
            "Endpoints for data manipulation and persistence (backend)",
            "Pagination, filtering and searching data in Mongodb (backend)",
            "Session management and authentication with Nextauth and JWT (backend)",
        ],
    },
];

export default function Home() {
    return (
        <div className="mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10">
            <Header />
            <hr className="border border-dotted border-gray-300 rounded-md" />

            <div className="w-full">
                {/* Title */}
                <TitleSection title="Experience" icon={<FaBriefcase className="text-3xl" />} />
                <div className="flex flex-col gap-10">
                    {EXPERIENCE.map((exp) => (
                        <CardExperience key={exp.name} experience={exp} />
                    ))}
                </div>
            </div>
        </div>
    );
}
