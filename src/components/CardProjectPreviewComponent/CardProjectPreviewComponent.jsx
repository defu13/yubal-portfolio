import { useState } from "react";
import { motion } from "framer-motion";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "../ProjectCard/ProjectCard";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function CardProjectPreviewComponent({ index, project, withButton = true }) {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <div
            className="w-full"
            style={{
                top: `${index * 200}px`,
                zIndex: index + 1,
            }}
        >
            <motion.div
                whileHover={{ y: -30 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
                transition={{
                    stiffness: 100,
                    damping: 7,
                    type: "spring",
                }}
                className="relative w-full"
                style={{
                    zIndex: index + 1,
                }}
            >
                {withButton && (
                    <motion.div
                        className="absolute top-[50%] left-0 -translate-y-1/2 z-[2] flex justify-center items-center w-full"
                        initial={{ y: 100 }}
                        animate={{
                            opacity: isHovering ? 1 : 0,
                            y: isHovering ? -60 : 100,
                        }}
                        transition={{
                            y: {
                                delay: 0.2,
                                stiffness: 100,
                                damping: 10,
                                type: "spring",
                            },
                            opacity: {
                                delay: 0.3,
                            },
                        }}
                    >
                        <ButtonComponent
                            buttonClassName={"md:text-2xl text-xl gap-4"}
                            href={`/myprojects/${project.id}`}
                            padding="p-5"
                            rounded="rounded-full"
                        >
                            {project.name}
                            <FontAwesomeIcon icon={faArrowRight} />
                        </ButtonComponent>
                    </motion.div>
                )}
                <ProjectCard
                    project={project}
                    isBackground={true}
                    
                    cardClassName={"sm:max-h-[400px] h-[300px]"}
                />
            </motion.div>
        </div>
    );
}

export default CardProjectPreviewComponent;
