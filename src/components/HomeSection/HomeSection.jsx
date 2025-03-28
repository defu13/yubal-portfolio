"use client";
import HighlightTitle from "../HighlightTitle/HighlightTitle";
import Title from "../Title/Title";
import SkillsComponent from "../SkillsComponent/SkillsComponent";
import { motion } from "framer-motion";
import { useScrollVertical } from "@/src/hooks/useScrollVertical";
import ProjectsPreviewComponent from "../ProjectsPreviewComponent/ProjectsPreviewComponent";
import DotTitle from "../DotTitle/DotTitle";
import { useIsMobile } from "@/src/hooks/useIsMobile";

function HomeSection() {
    const { isMobile } = useIsMobile();

    const { translateY, containerY } = useScrollVertical(1, 300, -500);

    return (
        <div className="flex flex-col gap-16" ref={containerY}>
            <section className="flex flex-col items-center w-full gap-40 lg:px-24 px-5">
                <SkillsComponent />
                <motion.div
                    className="md:self-start md:mt-0 mt-12"
                    style={{ y: translateY }}
                >
                    <Title>
                        Una combinación de creatividad y habilidades técnicas es
                        lo necesario para conseguir&nbsp;
                        <HighlightTitle>interfaces únicas.</HighlightTitle>
                    </Title>
                </motion.div>
            </section>
            <section className="lg:px-24 px-5 py-10 flex justify-center overflow-hidden">
                <div className="flex flex-col gap-20 md:max-w-5xl w-full">
                    <DotTitle>Proyectos recientes</DotTitle>
                    <ProjectsPreviewComponent />
                </div>
            </section>
        </div>
    );
}

export default HomeSection;
