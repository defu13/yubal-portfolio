"use client";
import React, { useEffect, useState } from "react";
import Floating from "../Floating/Floating";
import Image from "next/image";
import Magnetic from "../Magnetic/Magnetic";
import HighlightText from "../HighlightText/HighlightText";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MainSection.module.css";
import profilePic from "@/assets/images/rsz_fotoperfil_nueva-edit.jpg";
import { socialLinks } from "@/data/data";
import { faClipboard, faEnvelope, faHandPointer } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import linkArrowRotated from "@/assets/images/link_arrow_rotated.svg";
import DotTitle from "../DotTitle/DotTitle";
import { useScrollVertical } from "@/src/hooks/useScrollVertical";
import AnimatedEntrance from "../AnimatedEntrance/AnimatedEntrance";
import HighlightTitle from "../HighlightTitle/HighlightTitle";

function MainSection() {
    const [isCopied, setIsCopied] = useState(false);
    const { translateY } = useScrollVertical(100, -700);
    const isMobile = window.innerWidth < 640;

    useEffect(() => {
        let timer;
        if (isCopied) {
            timer = setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [isCopied]);

    const handleCopyClipboard = () => {
        navigator.clipboard.writeText("ydefuente@gmail.com");
        setIsCopied(true);
    };

    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            });
        }
    };

    return (
        <header>
            <div
                className={`flex flex-col items-center justify-center pt-10 lg:p-0 relative ${styles.header_container}`}
            >
                <div className="flex sm:flex-nowrap flex-wrap gap-6 md:gap-10 justify-center p-5">
                    <AnimatedEntrance className="flex flex-col gap-2 justify-between min-w-64">
                        <Floating>
                            <Image
                                src={profilePic}
                                width={250}
                                height={250}
                                alt="profile picture of author"
                                className="rounded-full max-[300px]:w-[90vw]"
                            />
                        </Floating>
                        <div
                            className={`text-neutral-100 justify-center items-end w-full h-12 ${styles.contact_container}`}
                        >
                            <div
                                className={`gap-2 cursor-pointer absolute flex items-center justify-center ${styles.contactame}`}
                            >
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <span className="jetbrainsmono-regular select-none">
                                    Contáctame
                                </span>
                            </div>

                            <div
                                className={`absolute flex items-center justify-center gap-2 cursor-pointer ${styles.correo}`}
                                onClick={handleCopyClipboard}
                            >
                                <span className="jetbrainsmono-regular">
                                    ydefuente@gmail.com
                                </span>
                                <FontAwesomeIcon
                                    icon={isCopied ? faCheck : faClipboard}
                                />
                            </div>
                        </div>
                    </AnimatedEntrance>
                    <div className="flex flex-col gap-8 max-w-2xl justify-between">
                        <AnimatedEntrance
                            className="flex gap-3 items-center -mb-4"
                            delay={0.2}
                        >
                            <DotTitle>Yubal de Fuente</DotTitle>
                        </AnimatedEntrance>
                        <AnimatedEntrance delay={0.3}>
                            <h1
                                className={`lg:text-8xl md:text-7xl sm:text-6xl text-[3rem] max-[310px]:text-[2.5rem] leading-none text-shadow-glow neuemontreal-medium tracking-tight ${styles.title}`}
                            >
                                <HighlightTitle color="#fafafa">Diseñador</HighlightTitle>&nbsp; y Desarrollador
                            </h1>
                        </AnimatedEntrance>
                        <AnimatedEntrance delay={0.4}>
                            <p className="text-xl neuemontreal-regular text-neutral-400">
                                Apasionado del diseño gráfico y la programación,
                                y especializado en el desarrollo web con{" "}
                                <HighlightText>React.</HighlightText>
                            </p>
                        </AnimatedEntrance>
                        <AnimatedEntrance
                            className="flex gap-10 justify-center sm:justify-start items-center"
                            delay={0.5}
                        >
                            {socialLinks.map((button) => (
                                <Magnetic
                                    key={button.name}
                                    animationForce={0.4}
                                >
                                    <a href={button.link} target="_blank">
                                        <motion.div
                                            whileHover={{
                                                color: button.color,
                                            }}
                                            transition={{ duration: 0.2 }}
                                            style={{
                                                color: isMobile ? button.color : "#fafafa",
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon={button.icon}
                                                size="2x"
                                            />
                                        </motion.div>
                                    </a>
                                </Magnetic>
                            ))}
                        </AnimatedEntrance>
                    </div>
                </div>
                <AnimatedEntrance
                    style={{ y: translateY }}
                    className="hidden md:flex absolute bottom-0"
                    delay={0.6}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <Floating animationForce={1.5} speed={2}>
                        <button onClick={() => scrollToElement("skills")} className="p-2 rounded-full">
                            <FontAwesomeIcon icon={faArrowDown} size="2x" />
                        </button>
                    </Floating>
                </AnimatedEntrance>
            </div>
        </header>
    );
}

export default MainSection;
