import Header from "@/components/header/Header";
import EducationSection from "@/components/sections/education/EducationSection";
import ExpSection from "@/components/sections/exp/ExpSection";
import ProjectSection from "@/components/sections/projects/ProjectSection";
import SocialsSection from "@/components/sections/socials/SocialsSection";

export default function Home() {
    return (
        <div className="mx-auto max-w-3xl px-5 mb-12 flex flex-col gap-10">
            <Header />
            <hr className="border border-dotted border-gray-300 rounded-md" />

            <ExpSection />
            <ProjectSection />
            <EducationSection />
            <SocialsSection />
        </div>
    );
}
