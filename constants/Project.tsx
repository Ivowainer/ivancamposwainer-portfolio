import JwtIcon from "@/components/general/icons/JwtIcon";
import Mongodb from "@/components/general/icons/Mongodb";
import NextjsIcon from "@/components/general/icons/NextjsIcon";
import TailwindIcon from "@/components/general/icons/TailwindIcon";
import TypescriptIcon from "@/components/general/icons/TypescriptIcon";
import ExpressIcon from "@/components/general/icons/ExpressIcon";
import SocketioIcon from "@/components/general/icons/SocketioIcon";
import CSharpIcon from "@/components/general/icons/CSharpIcon";
import SQLServerIcon from "@/components/general/icons/SQLServerIcon";
import PythonIcon from "@/components/general/icons/PythonIcon";
import CIcon from "@/components/general/icons/CIcon";
import RacketIcon from "@/components/general/icons/RacketIcon";

export interface IProject {
    title: string;
    description: string;
    icons: React.ReactNode[];
    url?: string;
    codeUrl?: string;
    imageUrl: string;
}

export interface IMiniProject {
    title: string;
    description: string;
    url: string;
    icons: React.ReactNode[];
}
export const PROJECTS: IProject[] = [
    
    {
        title: "ManageWainer",
        description: "A ProjectManager to keep your projects organized; you can register by a real gmail and add a real collaborators who can complete the task",
        codeUrl: "https://github.com/Ivowainer/manageWainer_mern",
        imageUrl: "managewainer.png",
        icons: [<ExpressIcon key="express" />, <SocketioIcon key="socketio" />, <TypescriptIcon key="typescript" />, <Mongodb key="mongodb" />, <JwtIcon key="jwt" />, <NextjsIcon key="nextjs" />, <TailwindIcon key="tailwind" />]
    },
    {
        title: "NomNomNosh",
        description: "Application that uses Clean Architecture and follows the approach of a modular monolith. A platform for sharing and discovering cooking recipes. Through an intuitive and user-friendly interface, users can search, post, rate, comment and save recipes, as well as interact with other users.",
        codeUrl: "https://github.com/Ivowainer/NomNomNosh_Hub",
        imageUrl: "nomnomnosh.png",
        icons: [<CSharpIcon key="csharp" />, <SQLServerIcon key="sqlserver" />, <JwtIcon key="jwt" />]
    },
    {
        title: "CW Shop",
        description: "An ecommerce with full experience. Data persistence, user management and roles. Checkout and payment methods",
        url: "https://cw-shop.vercel.app",
        codeUrl: "https://github.com/Ivowainer/cw-shop",
        imageUrl: "cw-shop.png",
        icons: [<NextjsIcon key="nextjs" />, <TailwindIcon key="tailwind" />, <TypescriptIcon key="typescript" />, <Mongodb key="mongodb" />, <JwtIcon key="jwt" /> ]
    },
]

export const MINI_PROJECTS: IMiniProject[] = [
    
    {
        title: "Play",
        description: "Development of a game in C# that uses microservices.",
        url: "https://github.com/Ivowainer/Play",
        icons: [<CSharpIcon key="csharp" />, <Mongodb key="mongodb" />]
    },
    {
        title: "Final TP Progr2",
        description: "Practical work for the subject Programming 2. Documented and highly explained",
        url: "https://github.com/Ivowainer/TP_Final_Progr2",
        icons: [<PythonIcon key="python" />, <CIcon key="c" />]
    },
    {
        title: "CQRS pattern practice",
        description: "",
        url: "https://github.com/Ivowainer/CQRS.Practice",
        icons: [<CSharpIcon key="csharp" />, <SQLServerIcon key="sqlserver" />]
    },
    {
        title: "University code (subjects)",
        description: "University Code for various subjects",
        url: "https://github.com/Ivowainer/facultad_progr",
        icons: [<PythonIcon key="python" />, <CIcon key="c" />, <RacketIcon key="racket" />]
    },
]