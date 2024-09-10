import React from "react";
import { projectsData } from "@/data/data";
import Link from "next/link";
import ProjectCard from "../ProjectCard/ProjectCard";
import { motion } from "framer-motion";
import Magnetic from "../Magnetic/Magnetic";
import styles from "./ProjectsPreviewComponent.module.css";
import ButtonComponent from "../Button/ButtonComponent";

function ProjectsPreviewComponent() {
    return (
        <>
            <div className="relative md:max-w-5xl h-[100vh] w-full flex flex-col">
                {projectsData.slice(-3).map((project, index) => (
                    <Link key={index} href={`/myprojects/${project.id}`}>
                        <div
                            className="absolute w-full"
                            style={{
                                top: `${index * 200}px`,
                                zIndex: index + 1,
                            }}
                        >
                            <motion.div
                                whileHover={{ y: -30 }}
                                transition={{ duration: 0.4 }}
                                className="relative w-full"
                                style={{
                                    zIndex: index + 1,
                                }}
                            >
                                <ProjectCard
                                    project={project}
                                    isBackground={true}
                                    isShadow={false}
                                    cardClassName={"sm:max-h-[400px] h-[300px]"}
                                />
                            </motion.div>
                            {index === 2 && (
                                <div
                                    className="hero-fade bottom-0"
                                    style={{
                                        zIndex: 3,
                                        position: "absolute",
                                    }}
                                ></div>
                            )}
                        </div>
                    </Link>
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
