import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { MdArrowForward } from "react-icons/md";
import { useIsMobile } from "@/src/hooks/useIsMobile";
import Link from "next/link";

function NextProjectComponent({ nextProject }) {
    const [isHovering, setIsHovering] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        if (isMobile) {
            setIsHovering(true);
        } else {
            setIsHovering(false);
        }
    }, [isMobile]);

    return (
        <>
            <div className="flex w-full lg:max-w-7xl self-center">
                <div className="flex justify-center border-b-[1px] overflow-hidden pt-[70px] w-full">
                    <motion.div
                        className="w-full sm:max-w-[85%] max-w-[95%] flex justify-center"
                        onHoverStart={
                            !isMobile ? () => setIsHovering(true) : null
                        }
                        onHoverEnd={
                            !isMobile ? () => setIsHovering(false) : null
                        }
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
                                className="absolute top-[50%] left-0 -translate-y-1/2 z-[2] flex justify-center items-center w-full"
                                initial={{ y: 140 }}
                                animate={{
                                    opacity: isHovering ? 1 : 0,
                                    y: isHovering ? 0 : 140,
                                }}
                                transition={{
                                    y: {
                                        delay: 0.2,
                                        stiffness: 100,
                                        damping: 10,
                                        type: "spring",
                                    },
                                    opacity: {
                                        delay: 0.2,
                                    },
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
                                    {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                                    <MdArrowForward size="2.5rem" />
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
                                    isShadow={isMobile ? false : true}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default NextProjectComponent;
