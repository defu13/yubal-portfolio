"use client";
import DotTitle from "@/src/components/DotTitle/DotTitle";
import HighlightTitle from "@/src/components/HighlightTitle/HighlightTitle";
import Title from "@/src/components/Title/Title";
import { useLoading } from "@/src/context/LoadingContext";
import { useEffect } from "react";
import ProjectCard from "@/src/components/ProjectCard/ProjectCard";
import { projectsCardData } from "@/data/data";
import Link from "next/link";
import AnimatedEntrance from "@/src/components/AnimatedEntrance/AnimatedEntrance";

export default function Proyectos() {
    const { setLoading } = useLoading();
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <section>
            <div className="flex flex-col items-center p-5 gap-24">
                <div className="flex flex-col gap-8 mt-[20vh] md:self-start md:ml-12">
                    <AnimatedEntrance>
                        <DotTitle>Proyectos</DotTitle>
                    </AnimatedEntrance>
                    <AnimatedEntrance delay={0.2}>
                        <Title>
                            Disfruto creando interfaces, experiencias e
                            historias que conecten con el&nbsp;
                            <HighlightTitle>usuario.</HighlightTitle>
                        </Title>
                    </AnimatedEntrance>
                </div>
                <AnimatedEntrance
                    className="flex flex-col w-full lg:max-w-6xl gap-20"
                    delay={0.4}
                >
                    {projectsCardData.map((project, index) => (
                        <Link key={index} href={`/proyectos/${project.id}`}>
                            <ProjectCard project={project} />
                        </Link>
                    ))}
                </AnimatedEntrance>
            </div>
        </section>
    );
}
