export interface IExperience {
    name: string;
    brand: string;
    date: string;
    points: string[];
    url?: string;
}

export const EXPERIENCE: IExperience[] = [
    {
        name: "Full Stack Developer",
        brand: "Fiduxion - Software Factory",
        date: "Aug 2024 - Dec 2024",
        points: [
            "Development of productive web applications using Clean Architecture",
            "Implementation of Repository Pattern, Service Layer and Singleton to decouple business logic and persistence",
            "JoyaApp: platform for quoting and sharing professional budgets",
            "Refactor legacy database architecture and migration",
            "Optimization of REST APIs to support traffic peaks (+3k visits/day)",
            "Implementation of traffic and conversion metrics",
            "CountryProp: home sales platform",
            "Work on authentication (JWT), session handling and critical bug fixes in production",
            "Improved stability and user experience in login flows",
            "Development of critical form application for a company, supporting +5,000 requests in 24hs",
            "Collaborative teamwork using Git and agile methodologies",
        ],
    },
    
    {
        name: "Frontend Developer (Freelance)",
        brand: "Gysem Logística",
        date: "Jan 2025",
        points: ["Development of responsive and optimized frontend, working together with design", "Performance improvement and visual structure to strengthen the digital presence of the company"],
    },
    {
        name: "Full Stack (Freelance)",
        brand: "Sancino Tour",
        date: "Jan 2024 - Aug 2024",
        points: ["Development of an internal management system using modular architecture", "Implementation of authentication with JWT, reports and statistics", "Efficient queries on MongoDB with pagination and filters", "Evolutionary maintenance and continuous improvements according to business needs"],
    },
    {
        name: "Frontend (Freelance)",
        brand: "Clinica Selva Amazonica",
        date: "Dec 2022 - Apr 2023",
        points: ["Development of responsive web interfaces integrated with CMS (Sanity)", "Continuous maintenance and improvement, adapting to changing requirements in a real customer environment"],
    },
];
