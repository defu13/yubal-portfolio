import { projectsData } from "@/data/data";
import ProjectComponent from "@/src/components/ProjectComponent/ProjectComponent";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return projectsData.map((project) => ({
        projectId: project.id.toString(),
    }));
}

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
