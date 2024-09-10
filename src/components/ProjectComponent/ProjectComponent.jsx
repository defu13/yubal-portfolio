"use client";
import AnimatedEntrance from "@/src/components/AnimatedEntrance/AnimatedEntrance";
import BackButton from "@/src/components/BackButton/BackButton";
import Card from "@/src/components/Card/Card";
import DescriptionText from "@/src/components/DescriptionText/DescriptionText";
import Title from "@/src/components/Title/Title";
import { useLoading } from "@/src/context/LoadingContext";
import Image from "next/image";
import { useEffect } from "react";
import backgroundImage from "@/assets/images/portada_proyecto_vacio.png";
import Globe from "../Globe/Globe";
import { useScrollVertical } from "@/src/hooks/useScrollVertical";
import Link from "next/link";
import link_arrow from "@/assets/images/link_arrow.svg";
import { motion } from "framer-motion";
import { useIsMobile } from "@/src/hooks/useIsMobile";
import { projectsData } from "@/data/data";
import NextProjectComponent from "../NextProjectComponent/NextProjectComponent";

function ProjectComponent({ project }) {
    const { setLoading } = useLoading();
    const isMobile = useIsMobile();

    // calcular si es el ultimo proyecto
    const lastProject = projectsData[projectsData.length - 1];
    const isLastProject = project.id === lastProject.id;

    // calcula el nextProject a partir del project actual
    const nextProject = projectsData[project.id];

    const { containerY, translateY, rotate } = useScrollVertical(
        150,
        -600,
        -1,
        90,
        330,
        false
    );

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div
            className="flex flex-col items-center lg:px-24 px-5 gap-16"
            ref={containerY}
        >
            <div className="flex w-full flex-col gap-8 mt-[15vh] self-start items-start max-h-[85vh]">
                <AnimatedEntrance
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <BackButton />
                </AnimatedEntrance>
                <AnimatedEntrance delay={0.2}>
                    <div className="flex flex-col gap-8">
                        <Title>{project.name}</Title>
                        <DescriptionText>{project.description}</DescriptionText>
                    </div>
                </AnimatedEntrance>
                <AnimatedEntrance
                    delay={0.4}
                    className="w-full lg:max-w-7xl self-center flex flex-col"
                >
                    <div className="flex sm:flex-row flex-col mt-10 gap-12 sm:gap-8">
                        <div className="flex flex-col gap-6 flex-1">
                            <p className="neuemontreal-regular text-xs text-neutral-400">
                                ROL / SERVICIO
                            </p>
                            <hr className="shrink-0 border-none w-full bg-neutral-400 h-px" />
                            <p>{project.role}</p>
                        </div>
                        <div className="flex flex-col gap-6 flex-1">
                            <p className="neuemontreal-regular text-xs text-neutral-400">
                                FECHA
                            </p>
                            <hr className="shrink-0 border-none w-full bg-neutral-400 h-px" />
                            <p>{project.date}</p>
                        </div>
                        <div className="flex flex-col gap-6 flex-1">
                            <p className="neuemontreal-regular text-xs text-neutral-400">
                                EMPRESA
                            </p>
                            <hr className="shrink-0 border-none w-full bg-neutral-400 h-px" />
                            <p>{project.enterprice}</p>
                        </div>
                    </div>
                    {project.liveSite && (
                        <div className="flex items-end justify-end gap-12">
                            <div className="flex gap-2 items-center">
                                <p className="text-xs">Live Site</p>
                                <motion.div
                                    style={{ rotate: isMobile ? 45 : rotate }}
                                >
                                    <Image
                                        src={link_arrow}
                                        alt="link arrow"
                                        width={30}
                                    />
                                </motion.div>
                            </div>
                            <Link
                                href={project.liveSite}
                                target="_blank"
                                className="rounded-full flex z-[1] -mt-12"
                            >
                                <motion.div
                                    className="p-10 rounded-full flex justify-center items-center flex-col relative"
                                    style={{
                                        backgroundColor: project.cardColor,
                                        y: isMobile ? 35 : translateY,
                                    }}
                                >
                                    <Globe />
                                    <motion.div
                                        className="w-full h-full top-0 left-0 absolute rounded-full z-[-1] inset-0"
                                        whileHover={{
                                            backgroundColor: "#ff4444",
                                        }}
                                        transition={{
                                            duration: 2,
                                            ease: "easeInOut",
                                        }}
                                    ></motion.div>
                                </motion.div>
                            </Link>
                        </div>
                    )}
                </AnimatedEntrance>
            </div>
            <AnimatedEntrance delay={0.6}>
                <div className="max-h-[800px] w-full max-w-7xl relative">
                    <Image
                        src={backgroundImage}
                        alt="background image"
                        className="w-full max-w-7xl"
                    />
                </div>
            </AnimatedEntrance>
            <div
                className="hero-project"
                style={{
                    backgroundImage: `radial-gradient(circle farthest-side at 50% 0, ${project.backgroundColor}, #0000)`,
                    opacity: 0.75,
                }}
            ></div>
            <div className="flex flex-col gap-28">
                <div className="flex flex-col gap-8 w-full max-w-7xl">
                    {project.images.map((image, index) => (
                        <Card key={index} className={"overflow-hidden h-auto"}>
                            <Image
                                src={image}
                                alt="project image"
                                className="w-full"
                            />
                        </Card>
                    ))}
                </div>
                {!isLastProject && (
                    <div className="flex flex-col gap-8 mt-12">
                        <hr className="shrink-0 border-none w-full bg-neutral-800 h-px" />
                        <NextProjectComponent nextProject={nextProject} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectComponent;
