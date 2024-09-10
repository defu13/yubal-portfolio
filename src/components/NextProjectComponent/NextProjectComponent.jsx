import React, { useState } from "react";
import DotTitle from "../DotTitle/DotTitle";
import DotAnimation from "../DotAnimation/DotAnimation";
import ProjectCard from "../ProjectCard/ProjectCard";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonComponent from "../Button/ButtonComponent";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useIsMobile } from "@/src/hooks/useIsMobile";
import Link from "next/link";

function NextProjectComponent({ nextProject }) {
    const [isHovering, setIsHovering] = useState(false);
    const isMobile = useIsMobile();

    return (
        <>
            <div className="flex flex-col gap-12 w-full lg:max-w-7xl self-center">
                <DotTitle>
                    Continua explorando
                    <DotAnimation />
                </DotTitle>
                <div className="flex justify-center border-b-[1px] overflow-hidden pt-[70px]">
                    <Link
                        href={`/myprojects/${nextProject.id}`}
                        className="w-full max-w-[90%] flex"
                    >
                        <motion.div
                            className="flex justify-center w-full cursor-pointer"
                            onHoverStart={() => setIsHovering(true)}
                            onHoverEnd={() => setIsHovering(false)}
                        >
                            <motion.div
                                className="w-full relative"
                                animate={{
                                    y: isHovering ? -50 : 0,
                                }}
                                transition={{
                                    stiffness: 100,
                                    damping: 7,
                                    type: "spring",
                                }}
                            >
                                <motion.div
                                    className="absolute left-[50%] -translate-x-1/2 translate-y-1/2 z-[2] flex justify-center items-center -mb-12 w-full"
                                    initial={{
                                        bottom: 0,
                                    }}
                                    animate={{
                                        opacity: isHovering ? 1 : 0,
                                        bottom: isHovering ? "50%" : 0,
                                    }}
                                    transition={{
                                        delay: 0.2,
                                        stiffness: 100,
                                        damping: 10,
                                        type: "spring",
                                    }}
                                >
                                    <ButtonComponent
                                        buttonClassName={
                                            "md:text-2xl text-xl gap-4"
                                        }
                                        href={`/myprojects/${nextProject.id}`}
                                        padding="p-5"
                                        rounded="rounded-full"
                                    >
                                        Siguiente proyecto
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </ButtonComponent>
                                </motion.div>
                                <motion.div
                                    animate={{
                                        filter: isHovering
                                            ? "brightness(0.3)"
                                            : "brightness(1)",
                                    }}
                                >
                                    <ProjectCard
                                        project={nextProject}
                                        isBackground={true}
                                        containerClassName="w-full sm:-mb-[300px] md:-mb-[450px] -mb-[175px] pointer-events-none"
                                        cardClassName="sm:h-[500px] md:h-[700px] h-[300px]"
                                        isDark={isHovering}
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </Link>
                </div>
                <div className="flex justify-center mt-12">
                    <ButtonComponent href={"/myprojects"}>
                        Todos los proyectos
                    </ButtonComponent>
                </div>
            </div>
        </>
    );
}

export default NextProjectComponent;
