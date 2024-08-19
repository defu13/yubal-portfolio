"use client";
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import HighlightText from "../HighlightText/HighlightText";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectCard({ project }) {
    const [isHovering, setIsHovering] = useState(false);
    const shouldShowGradient = isHovering || window.innerWidth < 640;

    return (
        <div className={styles.container}>
            <motion.div
                className={`sm:h-[600px] h-auto sm:gap-16 gap-6 ${styles.card}`}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
            >
                <div className="flex justify-between">
                    <div className="z-[3] gap-1 flex flex-col">
                        <HighlightText>
                            <p className="text-xl">{project.name}</p>
                        </HighlightText>
                        <p className="text-base text-neutral-400">
                            {project.description}
                        </p>
                    </div>
                    <motion.div
                        className="z-10 sm:mr-5"
                        animate={{ x: isHovering ? 20 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FontAwesomeIcon icon={faArrowRight} size="2xl" />
                    </motion.div>
                </div>
                <motion.div
                    className={`sm:max-w-[90%]  ${styles.img}`}
                    animate={{ y: isHovering ? -25 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src={project.img}
                        alt="project image"
                        className="rounded-lg"
                    />
                </motion.div>
                <AnimatePresence>
                    {shouldShowGradient && (
                        <>
                            <motion.div
                                className={styles.color}
                                initial={{
                                    opacity: 0,
                                    backgroundImage: `radial-gradient(circle at 50% 0, #7fcfff33, #0000 80%), radial-gradient(circle at 50% 0, ${project.color}, #0000)`,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                exit={{ opacity: 0 }}
                            ></motion.div>
                        </>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

export default ProjectCard;
