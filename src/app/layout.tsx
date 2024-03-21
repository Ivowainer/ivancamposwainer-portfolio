import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/Navbar";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ivan Campos Wainer",
    description: "Ivan Campos Wainer is a Backend Developer who specializes in building exceptional digital experiences. Welcome to my digital garden.",
    keywords: ["Portfolio", "Ivan Campos Wainer", "Backend"],
    icons: {
        icon: "https://ivancamposwainer.vercel.app/favicon.ico"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-white dark:bg-gray-800 pb-0 sm:pb-6 bg-opacity-25">
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
