const TitleSection = ({ title, icon }: { title: string, icon: React.ReactNode }) => {
    return (
        <div className="flex font-bold text-2xl text-blue-400 mb-6 items-center gap-3">
            <h2>Experience</h2>
            {icon}
        </div>
    );
};

export default TitleSection;