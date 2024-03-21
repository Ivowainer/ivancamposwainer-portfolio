const TitleSection = ({ title, icon }: { title: string, icon: React.ReactNode }) => {
    return (
        <div className="flex font-bold text-2xl text-indigo-400 dark:text-indigo-300  mb-6 items-center gap-3">
            <h2>{title}</h2>
            {icon}
        </div>
    );
};

export default TitleSection;
