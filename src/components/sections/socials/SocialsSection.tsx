import TitleSection from "@/components/general/TitleSection"
import { MdOutlineAlternateEmail } from "react-icons/md"

import CardSocials from "./CardSocials";
import LinkdnIcon from "@/components/general/icons/rs/LinkdnIcon";
import GithubIcon from "@/components/general/icons/rs/GithubIcon";

export interface ISocial {
    title: string;
    icon: React.ReactNode;
    url: string;
    color: string;
}

const SOCIALS: ISocial[] = [
    {
        title: "Linkedin",
        url: "https://www.linkedin.com/in/ivan-campos-wainer/",
        icon: <LinkdnIcon key="linkdn" />,
        color: "text-sky-600"
    },
    {
        title: "Github",
        url: "https://github.com/Ivowainer",
        icon: <GithubIcon key="github" />,
        color: "text-black/80 dark:text-white"
    }
]

const SocialsSection = () => {
  return (
    <div className="w-full">
        <TitleSection title="Socials" icon={<MdOutlineAlternateEmail className="text-3xl" />} />
        <div className="flex flex-wrap gap-3">
            {SOCIALS.map(val => (
                <CardSocials key={val.title} social={val}  />
            ))}
        </div>
    </div>
  )
}

export default SocialsSection