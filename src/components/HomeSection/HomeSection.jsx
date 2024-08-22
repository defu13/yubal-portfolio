"use client";
import HighlightTitle from "../HighlightTitle/HighlightTitle";
import Title from "../Title/Title";
import Slider from "../Slider/Slider";
import Skills from "../Skills/Skills";
import { motion } from "framer-motion";
import { useScrollVertical } from "@/src/hooks/useScrollVertical";

function HomeSection() {
    const { translateY } = useScrollVertical(300, -400);
    return (
        <section className="flex flex-col items-center w-full gap-40 mt-12">
            <Skills />
            <motion.div
                className="md:self-start md:ml-12 p-5"
                style={{ y: translateY }}
            >
                <Title>
                    Una combinación de creatividad y habilidades técnicas es lo
                    necesario para conseguir&nbsp;
                    <HighlightTitle>interfaces únicas.</HighlightTitle>
                </Title>
            </motion.div>
            <div className="h-[80vh]"></div>
        </section>
    );
}

export default HomeSection;
