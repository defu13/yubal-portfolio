import { projectsData } from "@/data/data";
import ProjectComponent from "@/src/components/ProjectComponent/ProjectComponent";

export async function generateStaticParams() {
    return projectsData.map((project) => ({
        projectId: project.id.toString(),
    }));
}

function Project({ params }) {
    const { projectId } = params;
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
