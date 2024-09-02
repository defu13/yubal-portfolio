import { projectsDetailsData } from "@/data/data";
import ProjectComponent from "@/src/components/ProjectComponent/ProjectComponent";

export async function generateStaticParams() {
    return projectsDetailsData.map((project) => ({
        projectId: project.id.toString(),
    }));
}

function Proyecto({ params }) {
    const { projectId } = params;
    const project = projectsDetailsData.find(
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

export default Proyecto;
