import Link from "next/link";
import { ISocial } from "./SocialsSection";

const CardSocials = ({ social }: { social: ISocial }) => {
    return (
        <Link href={social.url} target="_blank" className={`flex items-center gap-3 font-bold px-4 h-16 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-4 transition-all duration-150 ${social.color}`}>
            <div className="w-6">
                {social.icon}
            </div>
            {social.title}
        </Link>
    );
};

export default CardSocials;
