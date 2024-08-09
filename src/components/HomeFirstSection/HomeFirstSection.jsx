"use client";
import { useState } from "react";
import HighlightTitle from "../HighlightTitle/HighlightTitle";
import Title from "../Title/Title";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollAnimate } from "@/src/hooks/useScrollAnimate";
import dribbblePic from "../../../assets/images/dribbble_show.gif";
import linkArrow from "../../../assets/images/link_arrow.svg";
import HighlightText from "../HighlightText/HighlightText";
import Image from "next/image";
import { socialLinks } from "@/data/data";
import Magnetic from "../Magnetic/Magnetic";

function HomeFirstSection() {
    const [showOverlay, setShowOverlay] = useState(false);
    const { container, translateY } = useScrollAnimate();

    return (
        <section>
            <div className="flex flex-col p-5 gap-24 items-center">
                <div>
                    <Title>
                        Una combinación de creatividad y habilidades técnicas es
                        lo necesario para conseguir&nbsp;
                        <HighlightTitle>interfaces únicas.</HighlightTitle>
                    </Title>
                </div>
                <motion.div
                    className="flex gap-8 xl:flex-row flex-col"
                    ref={container}
                    style={{
                        y: translateY,
                    }}
                >
                    <Magnetic animationForce={0.05}>
                        <a href={socialLinks[3].link}>
                            <motion.div
                                className="relative"
                                onHoverStart={() => setShowOverlay(true)}
                                onHoverEnd={() => setShowOverlay(false)}
                            >
                                <AnimatePresence>
                                    {showOverlay && (
                                        <motion.div
                                            className="absolute inset-0 z-10 flex justify-center items-end"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <motion.div
                                                className="flex z-20 gap-2 items-center text-2xl mb-14 p-4 rounded-full"
                                                initial={{ y: 20 }}
                                                animate={{ y: 0 }}
                                                exit={{ y: 20 }}
                                            >
                                                <p className="neuemontreal-regular">
                                                    Dribbble
                                                </p>
                                                <Image
                                                    src={linkArrow}
                                                    width={25}
                                                    alt="link arrow"
                                                />
                                            </motion.div>

                                            <div className="rounded-xl absolute top-[1px] inset-0 pointer-events-none w-full h-full bg-gradient-to-t from-neutral-900 to-transparent to-90%" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <Image
                                    src={dribbblePic}
                                    width={800}
                                    alt="dribbble proyects"
                                    className="rounded-xl"
                                />
                            </motion.div>
                        </a>
                    </Magnetic>
                    <div className="flex flex-col p-5 pt-0 max-w-xl gap-8">
                        <div className="flex gap-3 items-center -mb-4">
                            <p className="neuemontreal-medium text-xl">
                                Diseño gráfico
                            </p>
                        </div>
                        <p className="neuemontreal-regular text-lg text-neutral-400">
                            Desde mi adolescencia, he encontrado una gran pasión
                            por el mundo del diseño gráfico. Me encanta
                            convertir ideas en imágenes atractivas y únicas,
                            logrando una armonía visual en todo mi trabajo.
                            <br />
                            <br />
                            Como autodidacta, he mejorado mi estilo y conseguida
                            una sólida comprensión del diseño, complementando
                            así el&nbsp;
                            <HighlightText>desarrollo UI/UX.</HighlightText>
                        </p>
                    </div>
                </motion.div>
                <div className="h-[80vh]"></div>
            </div>
        </section>
    );
}

export default HomeFirstSection;
