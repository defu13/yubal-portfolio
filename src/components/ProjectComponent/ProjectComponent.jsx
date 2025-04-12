"use client";
import AnimatedEntrance from "@/src/components/AnimatedEntrance/AnimatedEntrance";
import BackButton from "@/src/components/BackButton/BackButton";
import DescriptionText from "@/src/components/DescriptionText/DescriptionText";
import Title from "@/src/components/Title/Title";
import Image from "next/image";
import backgroundImage from "@/assets/images/portada_proyecto_vacio.png";
import Globe from "../Globe/Globe";
import { useScrollVertical } from "@/src/hooks/useScrollVertical";
import Link from "next/link";
import link_arrow_rotated from "@/assets/images/link_arrow_rotated.svg";
import { motion } from "framer-motion";
import { useIsMobile } from "@/src/hooks/useIsMobile";
import { projectsData } from "@/data/data";
import NextProjectComponent from "../NextProjectComponent/NextProjectComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import DotAnimation from "../DotAnimation/DotAnimation";
import styles from "./ProjectComponent.module.css";
import { useTheme } from "@/src/context/ThemeContext";

function ProjectComponent({ project }) {
    // const { setLoading } = useLoading();
    const isMobile = useIsMobile();

    const { theme } = useTheme();

    // calcular si es el ultimo proyecto
    const isLastProject = project.id === 1;

    // calcula el nextProject a partir del project actual
    const nextProject = projectsData[project.id - 2];

    const {
        containerY,
        translateY: firstTranslateY,
        rotate,
    } = useScrollVertical(1, 150, -1300, -1, 90, 600, false);

    // const { translateY: secondTranslateY } = useScrollVertical(1, 150, -600);

    const projectInfo = [
        {
            title: "ROL / SERVICIO",
            value: project.role,
        },
        {
            title: "FECHA",
            value: project.date,
        },
        {
            title: "EMPRESA",
            value: project.enterprice,
        },
    ];

    // useEffect(() => {
    //     setLoading(false);
    // }, []);

    return (
        <div
            className="flex flex-col items-center lg:px-24 px-5 gap-16"
            ref={containerY}
        >
            <div className="flex w-full flex-col gap-8 mt-[15vh] self-start items-start">
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
                        {projectInfo.map((item, index) => (
                            <div
                                className="flex flex-col gap-6 flex-1"
                                key={index}
                            >
                                <p className="neuemontreal-regular text-xs dark:text-neutral-500 text-neutral-600">
                                    {item.title}
                                </p>
                                <hr className="shrink-0 border-none w-full bg-neutral-600 h-px" />
                                <p className="dark:neuemontreal-regular neuemontreal-medium">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                    {project.liveSite && (
                        <AnimatedEntrance delay={0.6}>
                            <div className="flex items-end justify-end gap-12">
                                <div className="flex gap-2 items-center">
                                    <p className="text-xs">Ver más</p>
                                    <motion.div
                                        style={{
                                            rotate: isMobile ? 45 : rotate,
                                        }}
                                    >
                                        <Image
                                            src={link_arrow_rotated}
                                            alt="link arrow"
                                            width={30}
                                            className="transform rotate-180 dark:invert invert-[15%]"
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
                                            y: isMobile ? 35 : firstTranslateY,
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
                        </AnimatedEntrance>
                    )}
                </AnimatedEntrance>
            </div>
            <AnimatedEntrance
                delay={project.liveSite ? 0.8 : 0.6}
                className="w-full flex justify-center"
            >
                <div
                    className="h-full w-full max-w-7xl bg-cover flex justify-center sm:pt-24 pt-0"
                    style={{
                        backgroundImage: !isMobile
                            ? `url(${backgroundImage.src})`
                            : "none",
                    }}
                >
                    <motion.div
                        className="flex w-full h-full justify-center items-center relative"
                        // style={{ y: isMobile ? 0 : secondTranslateY }}
                    >
                        <Image
                            src={project.primaryImage}
                            alt="project main image "
                            className={`sm:max-w-[70%] w-[99%] h-auto object-cover rounded-3xl mb-[2px] ${styles.primary_image}`}
                        />
                    </motion.div>
                </div>
            </AnimatedEntrance>
            <div
                className="hero-project dark:opacity-75 opacity-100"
                style={{
                    backgroundImage: `radial-gradient(circle farthest-side at 50% 0, ${project.backgroundColor}, #0000)`,
                }}
            ></div>
            <div className="flex flex-col gap-28 sm:mt-24">
                <div className="flex flex-col w-[100vw] lg:w-full md:max-w-7xl box-shadow-card">
                    {project.images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`Imagen del proyecto ${index + 1}`}
                            className="w-full"
                        />
                    ))}
                </div>

                <div className="flex flex-col gap-8 mt-12 lg:mx-0 mx-5">
                    <hr className="shrink-0 border-none w-full bg-neutral-600 h-px" />
                    {!isLastProject && (
                        <>
                            <Title>
                                Continua explorando
                                <DotAnimation />
                            </Title>
                            <NextProjectComponent nextProject={nextProject} />
                        </>
                    )}
                    <div className="flex justify-center mt-12">
                        <ButtonComponent
                            href={"/myprojects"}
                            buttonClassName={`${
                                theme !== "dark" ? "custom-button-moredark" : ""
                            }`}
                        >
                            Todos los proyectos
                        </ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectComponent;
