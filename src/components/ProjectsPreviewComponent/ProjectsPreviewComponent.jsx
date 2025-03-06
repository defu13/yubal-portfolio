import { projectsData } from "@/data/data";
import Link from "next/link";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import CardProjectPreviewComponent from "../CardProjectPreviewComponent/CardProjectPreviewComponent";

function ProjectsPreviewComponent() {
    return (
        <div className="relative flex flex-col items-center w-full h-[730px] overflow-hidden pt-12">
            <div className="md:max-w-5xl w-full flex flex-col">
                {projectsData.slice(-3).map((project, index) => (
                    <Link
                        key={index}
                        href={`/myprojects/${project.id}`}
                        className="h-[300px]"
                        style={{
                            marginTop: index === 0 ? "0" : "-120px",
                        }}
                    >
                        <CardProjectPreviewComponent
                            index={index}
                            project={project}
                            withButton={false}
                        />
                    </Link>
                ))}
            </div>
            <div
                className="hero-fade"
                style={{
                    zIndex: 3,
                    height: "240px",
                    pointerEvents: "none",
                }}
            ></div>
            <ButtonComponent
                href="/myprojects"
                linkClassName="flex z-[4] absolute bottom-12"
            >
                Más proyectos
            </ButtonComponent>
        </div>
    );
}

export default ProjectsPreviewComponent;
