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
import profilePicColor from "@/assets/images/rsz_fotoperfil_nueva-edit-color.jpg";
import { socialLinks } from "@/data/data";
import { faClipboard, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import DotTitle from "../DotTitle/DotTitle";
import { useScrollVertical } from "@/src/hooks/useScrollVertical";
import AnimatedEntrance from "../AnimatedEntrance/AnimatedEntrance";
import HighlightTitle from "../HighlightTitle/HighlightTitle";
import { useIsMobile } from "@/src/hooks/useIsMobile";
import { MdArrowDownward, MdArrowForward } from "react-icons/md";

function MainSection() {
    const [isCopied, setIsCopied] = useState(false);
    const { translateY } = useScrollVertical(1, 100, -700);
    const isMobile = useIsMobile();

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const setFromEvent = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", setFromEvent);
        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, []);

    const size = isHovering ? "150" : "0";

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
        <>
            <div
                className={`flex flex-col items-center justify-center relative ${styles.header_container}`}
            >
                <div className="flex sm:flex-nowrap flex-wrap gap-6 md:gap-10 justify-center p-5">
                    <AnimatedEntrance className="flex flex-col gap-2 justify-between min-w-64">
                        <Floating>
                            <motion.div
                                className={`${styles.mask} absolute`}
                                // animate={{
                                //     WebkitMaskPosition: `${mousePosition.x + 280}px ${mousePosition.y}px`,
                                //     WebkitMaskSize: `${size}px`,
                                // }}
                                // transition={{ease: "backOut", duration: 0.4}}
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 4 }}
                            >
                                <Image
                                    src={profilePicColor}
                                    alt="profile picture of author colored"
                                    className="rounded-full max-[300px]:max-w-[90vw] sm:max-w-[250px] max-w-[200px]"
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                />
                            </motion.div>
                            <Image
                                src={profilePic}
                                alt="profile picture of author"
                                className="rounded-full max-[300px]:max-w-[90vw] sm:max-w-[250px] max-w-[200px]"
                            />
                        </Floating>
                        <div
                            className={`text-neutral-100 justify-center items-end w-full h-12 ${styles.contact_container}`}
                        >
                            <div
                                className={`gap-2 cursor-pointer absolute flex items-center justify-center ${styles.contactame}`}
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
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
                            className="flex gap-3 items-center"
                            delay={0.2}
                        >
                            <DotTitle>Yubal de Fuente</DotTitle>
                        </AnimatedEntrance>
                        <AnimatedEntrance delay={0.3}>
                            <h1
                                className={`lg:text-8xl md:text-7xl sm:text-6xl text-[3rem] max-[310px]:text-[2.5rem] leading-none text-glow neuemontreal-medium tracking-tight ${styles.title}`}
                            >
                                <HighlightTitle color="#fafafa">
                                    Diseñador
                                </HighlightTitle>
                                &nbsp; y Desarrollador
                            </h1>
                        </AnimatedEntrance>
                        <AnimatedEntrance delay={0.4}>
                            <p className="text-xl neuemontreal-regular text-neutral-400">
                                Apasionado del diseño gráfico y la programación,
                                y especializado en el desarrollo web con React.
                                {/* <HighlightText>React.</HighlightText> */}
                            </p>
                        </AnimatedEntrance>
                        <AnimatedEntrance delay={0.5} className="flex">
                            <a href="/cv.pdf" className="flex" target="_blank">
                                <HighlightText>
                                    <div
                                        className={`flex -mt-3 gap-2 items-center ${styles.arrow_container}`}
                                    >
                                        <p className="text-base neuemontreal-regular flex">
                                            Echa un ojo a mi
                                            &nbsp;
                                            <div className={`${styles.letter_c}`}>C</div>
                                            <div className={`${styles.letter_v}`}>V</div>
                                        </p>
                                        <div
                                            className={`relative flex items-center justify-center w-[1.4rem] h-[1.4rem]`}
                                        >
                                            <div className={`${styles.arrow}`}>
                                                <MdArrowForward size="1.4rem" />
                                            </div>
                                            <div className={`${styles.arrow}`}>
                                                <MdArrowForward size="1.4rem" />
                                            </div>
                                        </div>
                                    </div>
                                </HighlightText>
                            </a>
                        </AnimatedEntrance>
                        <AnimatedEntrance
                            className="flex gap-10 justify-center sm:justify-start items-center"
                            delay={0.6}
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
                                                color: isMobile
                                                    ? button.color
                                                    : "#fafafa",
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
                    delay={0.7}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <Floating animationForce={1.5} speed={2}>
                        <button
                            onClick={() => scrollToElement("skills")}
                            className="p-2 rounded-full"
                        >
                            <MdArrowDownward size="3rem" />
                        </button>
                    </Floating>
                </AnimatedEntrance>
            </div>
        </>
    );
}

export default MainSection;
