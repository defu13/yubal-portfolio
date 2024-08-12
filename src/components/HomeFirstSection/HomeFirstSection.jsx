"use client";
import HighlightTitle from "../HighlightTitle/HighlightTitle";
import Title from "../Title/Title";
import { motion } from "framer-motion";
import { useScrollVertical } from "@/src/hooks/useScrollVertical";
import ImageCard from "../ImageCard/ImageCard";
import { dribbblePics } from "@/data/data";
import styles from "./HomeFirstSection.module.css";
import { useScrollHorizontal } from "@/src/hooks/useScrollHorizontal";
import SkillsDescription from "../SkillsDescription/SkillsDescription";
import {
    faCode,
    faWandMagicSparkles,
    faBolt,
} from "@fortawesome/free-solid-svg-icons";
import DotTitle from "../DotTitle/DotTitle";

function HomeFirstSection() {
    const { containerY, translateY } = useScrollVertical();
    const { containerX, translateX } = useScrollHorizontal();

    return (
        <section className="flex flex-col items-center w-full sm:gap-10 mt-12">
            <div className="max-w-5xl p-5">
                <Title>
                    Una combinación de creatividad y habilidades técnicas es lo
                    necesario para conseguir&nbsp;
                    <HighlightTitle>interfaces únicas.</HighlightTitle>
                </Title>
            </div>
            <div className="flex flex-col gap-24 items-center w-full">
                <motion.div
                    className="flex gap-48 flex-col w-full overflow-hidden pt-16"
                    ref={containerY}
                    style={{
                        y: translateY,
                    }}
                >
                    <motion.div
                        className={`flex gap-8 flex-shrink-0 ${styles.dribbble_container}`}
                        ref={containerX}
                        style={{ x: translateX }}
                        // initial={{ x: 0 }}
                        // animate={{ x: "-156%" }}
                        // transition={{
                        //     duration: 15,
                        //     repeat: Infinity,
                        //     ease: "linear",
                        // }}
                    >
                        {dribbblePics.concat(dribbblePics).map((pic, index) => (
                            <ImageCard pic={pic} key={index} />
                        ))}
                    </motion.div>
                    <div className="flex flex-col p-5 pt-0 gap-20 self-center md:px-24">
                        <div className="flex flex-col gap-8 self-start">
                            <DotTitle>Habilidades</DotTitle>
                            <Title>Puedo ayudarte con...</Title>
                        </div>
                        <div className="flex md:flex-row flex-col gap-20">
                            <SkillsDescription
                                number={"01"}
                                title={"Desarrollo"}
                                icon={faCode}
                            >
                                Desde mi adolescencia, he encontrado una gran
                                pasión por el mundo del diseño gráfico. Me
                                encanta convertir ideas en imágenes atractivas y
                                únicas, logrando una armonía visual en todo mi
                                trabajo.
                            </SkillsDescription>
                            <SkillsDescription
                                number={"02"}
                                title={"Diseño"}
                                icon={faWandMagicSparkles}
                            >
                                Desde mi adolescencia, he encontrado una gran
                                pasión por el mundo del diseño gráfico. Me
                                encanta convertir ideas en imágenes atractivas y
                                únicas, logrando una armonía visual en todo mi
                                trabajo.
                            </SkillsDescription>
                            <SkillsDescription
                                number={"03"}
                                title={"Paquete completo"}
                                icon={faBolt}
                            >
                                Desde mi adolescencia, he encontrado una gran
                                pasión por el mundo del diseño gráfico. Me
                                encanta convertir ideas en imágenes atractivas y
                                únicas, logrando una armonía visual en todo mi
                                trabajo.
                            </SkillsDescription>
                        </div>
                    </div>
                </motion.div>
                <div className="h-[80vh]"></div>
            </div>
        </section>
    );
}

export default HomeFirstSection;
