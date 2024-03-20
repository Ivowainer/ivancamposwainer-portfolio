import Header from "@/components/header/Header";

export default function Home() {
    return (
        <div className="mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10">
            <Header />
            <hr className="border border-dotted border-gray-300 rounded-md" />
            <Header />
            <Header />
            <Header />
        </div>
    );
}
