import { projectsData } from "@/data/data";
import ProjectComponent from "@/src/components/ProjectComponent/ProjectComponent";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return projectsData.map((project) => ({
        projectId: project.id.toString(),
    }));
}

// Generar metadatos dinámicos
export async function generateMetadata({ params }) {
    const { projectId } = params;
    const project = projectsData.find(
        (project) => project.id.toString() === projectId
    );

    if (!project) {
        return {
            title: "Proyecto no encontrado",
            description: "El proyecto solicitado no existe.",
        };
    }

    return {
        title: `${project.name}`,
        description: `Descubre más sobre el proyecto "${project.name}". ${project.description}`,
        openGraph: {
            title: project.name,
            description: project.description,
            images: [
                {
                    url: `/${project.publicName}/main.jpg`,
                    width: 1200,
                    height: 1200,
                    alt: project.name,
                },
            ],
        },
    };
};

async function Project({ params }) {
    const { projectId } = await params;
    const project = projectsData.find(
        (project) => project.id.toString() === projectId
    );

    if (!project) {
        return notFound();
    }

    return (
        <section>
            <ProjectComponent project={project} />
        </section>
    );
}

export default Project;
