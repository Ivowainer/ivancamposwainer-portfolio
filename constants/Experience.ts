export interface IExperience {
    name: string;
    brand: string;
    date: string;
    points: string[];
    url?: string;
}

export const EXPERIENCE: IExperience[] = [
    {
        name: "Frontend Project Freelance",
        url: "https://www.clinicaselvaamazonica.com/",
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
