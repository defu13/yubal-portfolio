"use client";
import DotTitle from "@/src/components/DotTitle/DotTitle";
import HighlightTitle from "@/src/components/HighlightTitle/HighlightTitle";
import Title from "@/src/components/Title/Title";
import { useLoading } from "@/src/context/LoadingContext";
import { useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/src/components/ProjectCard/ProjectCard";
import { projectsData } from "@/data/data";

export default function Proyectos() {
    const { setLoading } = useLoading();
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <section>
            <div className="flex flex-col items-center p-5 gap-24">
                <div className="flex flex-col gap-8 mt-[20vh] md:self-start md:ml-12">
                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 70 }}
                        transition={{ duration: 0.5 }}
                    >
                        <DotTitle>Proyectos</DotTitle>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 70 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Title>
                            Disfruto creando interfaces, experiencias e
                            historias que conecten con el&nbsp;
                            <HighlightTitle>usuario.</HighlightTitle>
                        </Title>
                    </motion.div>
                </div>
                <motion.div
                    className="flex flex-col w-full lg:max-w-6xl gap-20"
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 70 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
