"use client";
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import HighlightText from "../HighlightText/HighlightText";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectCard({ project, isBackground = false, cardClassName = "sm:h-[550px] md:h-[700px] h-auto", isShadow = true }) {
    const [isHovering, setIsHovering] = useState(false);
    const shouldShowGradient = isHovering || window.innerWidth < 640;
    const isMobile = window.innerWidth < 640;

    return (
        <div className={`${styles.container}`} style={{boxShadow: !isShadow && "none"}}>
            <motion.div
                className={`sm:gap-16 gap-10 ${cardClassName} ${styles.card}`}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
            >
                <div className="flex justify-between">
                    <div className="z-[3] gap-1 flex flex-col">
                        <HighlightText color="#fafafa">
                            <p className="text-xl">{project.name}</p>
                        </HighlightText>
                        <p className="text-base text-neutral-400">
                            {project.description}
                        </p>
                    </div>
                    <motion.div
                        className="z-10 sm:mr-5"
                        animate={{ x: isHovering && !isMobile ? 20 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FontAwesomeIcon icon={faArrowRight} size="2xl" />
                    </motion.div>
                </div>

                {/* Imagen de normal, o de fondo */}
                {!isBackground ? (
                    <>
                        <motion.div
                            className={`sm:max-w-[90%]  relative ${styles.img}`}
                            animate={{
                                y: !isMobile && shouldShowGradient ? -25 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={project.primaryImg}
                                alt="project image"
                                className="rounded-t-lg"
                            />
                        </motion.div>
                        <AnimatePresence>
                            {shouldShowGradient && (
                                <>
                                    <motion.div
                                        className={styles.color}
                                        initial={{
                                            opacity: 0,
                                            backgroundImage: `radial-gradient(circle at 50% 0, #7fcfff33, #0000 80%), radial-gradient(circle at 50% 0, ${project.cardColor}, #0000)`,
                                        }}
                                        animate={{
                                            opacity: 1,
                                        }}
                                        exit={{ opacity: 0 }}
                                    ></motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </>
                ) : (
                    <Image
                        className={`w-full bg-cover bg-center absolute top-0 left-0 ${styles.img}`}
                        src={project.primaryImg}
                        alt="project image"
                        style={{filter: "brightness(0.3)"}}
                    />
                )}
            </motion.div>
        </div>
    );
}

export default ProjectCard;
