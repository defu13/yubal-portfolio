"use client";
import Link from "next/link";
import AnimatedEntrance from "../AnimatedEntrance/AnimatedEntrance";
import DotTitle from "../DotTitle/DotTitle";
import HighlightTitle from "../HighlightTitle/HighlightTitle";
import Title from "../Title/Title";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projectsData } from "@/data/data";

function MyProjectsComponent() {
    return (
        <div className="flex flex-col items-center gap-24 lg:px-24 px-5">
            <div className="flex flex-col gap-8 mt-[20vh] md:self-start">
                <AnimatedEntrance>
                    <DotTitle>Proyectos</DotTitle>
                </AnimatedEntrance>
                <AnimatedEntrance delay={0.2}>
                    <Title>
                        Disfruto creando interfaces, experiencias e historias
                        que conecten con el&nbsp;
                        <HighlightTitle>usuario.</HighlightTitle>
                    </Title>
                </AnimatedEntrance>
            </div>
            <AnimatedEntrance
                className="flex flex-col w-full lg:max-w-7xl gap-20"
                delay={0.4}
            >
                {projectsData
                    .slice(0)
                    .reverse()
                    .map((project, index) => (
                        <Link key={index} href={`/myprojects/${project.id}`}>
                            <ProjectCard project={project} />
                        </Link>
                    ))}
            </AnimatedEntrance>
        </div>
    );
}

export default MyProjectsComponent;
