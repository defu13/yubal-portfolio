"use client";
import { projectsData } from "@/data/data";
import Link from "next/link";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import CardProjectPreviewComponent from "../CardProjectPreviewComponent/CardProjectPreviewComponent";
import { useTheme } from "@/src/context/ThemeContext";

function ProjectsPreviewComponent() {
    const { theme } = useTheme();

    return (
        <div className="relative flex flex-col items-center w-full overflow-hidden pt-24">
            <div className="md:max-w-5xl w-full flex flex-col xl:px-0 px-5">
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
                linkClassName="flex z-[4] absolute bottom-16"
                buttonClassName={`${
                    theme !== "dark" ? "custom-button-moredark" : ""
                }`}
            >
                Más proyectos
            </ButtonComponent>
        </div>
    );
}

export default ProjectsPreviewComponent;
