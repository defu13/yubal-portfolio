import { projectsData } from "@/data/data";

export default async function sitemap() {
    
    const projectsRoutes = projectsData.map((project) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/myprojects/${project.id}`,
        lastModified: new Date().toISOString(),
        priority: 0.8,
    }));

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            lastModified: new Date(),
            priority: 1.0,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/myprojects`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
            lastModified: new Date(),
            priority: 0.7,
        },
        ...projectsRoutes,
    ];
}
