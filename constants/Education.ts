export interface IEducation {
    title: string;
    date: string;
    description: string;
    height?: string;
}

export const EDUCATION: IEducation[] = [
    {
        title: "Lic. Ciencias de la Computación",
        date: "Currently Studying",
        description: "Bachelor of Computer's Science in the FCEIA (Ciencias Exactas, Ingeniería y Agrimensura), UNR (Universidad Nacional de Rosario)",
    },
    {
        title: "Coderhouse - Programacion Backend",
        date: "2022 - 2023",
        description: "Modern application development with NodeJS, MongoDB and asynchronous techniques; I work on SQL and NoSQL databases, mastering data management efficiently, agilely and with great ease of scalability.",
    },
    {
        title: "ASP.NET Core Bootcamp",
        description: "ASP.NET Core Entity Framework, JWT, SQL Server, WebAPI, Export PDF | Desarrollo profesional de proyectos",
        date: "Currently Studying",
    },
    {
        title: "Course NextJS",
        date: "2023",
        description: "Next.js: El framework de React para producción | del profesor Fernando Herrera en Udemy",
        height: "h-32 lg:h-28",
    },
    {
        title: "Course ReactJS",
        date: "2021",
        description: "React - La Guía Completa: Hooks Context Redux MERN +15 Apps | del profesor Juan Pablo de la Torre Valdez en Udemy",
    },
    {
        title: "Course PHP & MySql",
        date: "2019",
        description: "Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL | del profesor Juan Pablo de la Torre Valdez en Udemy",
    },
    {
        title: "Instituto Belgrano 2060",
        description: "High school located in Rosario, Santa Fe; Degree in 'Bachelor in Communication'. With orientation in communication, arts, design and programming",
        date: "2018 - 2022",
    },
];
