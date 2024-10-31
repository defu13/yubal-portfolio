import { projectsData } from "@/data/data";
import Link from "next/link";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import CardProjectPreviewComponent from "../CardProjectPreviewComponent/CardProjectPreviewComponent";

function ProjectsPreviewComponent() {
    return (
        <>
            <div className="relative md:max-w-5xl w-full flex flex-col">
                {projectsData.slice(-3).map((project, index) => (
                    <>
                        <Link key={index} href={`/myprojects/${project.id}`} className="h-[300px]">
                            <CardProjectPreviewComponent index={index} project={project} withButton={false} />
                        </Link>
                        {index === 2 && (
                            <div
                                className="hero-fade bottom-0 mb-[170px]"
                                style={{
                                    zIndex: 3,
                                }}
                            ></div>
                        )}
                    </>
                ))}
            </div>
            <ButtonComponent
                href="/myprojects"
                linkClassName="flex self-center w-[150px] -mt-[300px] z-[4]"
            >
                Más proyectos
            </ButtonComponent>
        </>
    );
}

export default ProjectsPreviewComponent;
