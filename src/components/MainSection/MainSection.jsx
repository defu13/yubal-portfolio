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
import { faClipboard, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import linkArrowRotated from "@/assets/images/link_arrow_rotated.svg";
import DotTitle from "../DotTitle/DotTitle";

function MainSection() {
    const [isCopied, setIsCopied] = useState(false);

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

    return (
        <header>
            <div
                className={`flex flex-col items-center justify-center pt-10 lg:p-0 ${styles.header_container}`}
            >
                <div className="flex sm:flex-nowrap flex-wrap gap-6 md:gap-10 justify-center p-5">
                    <motion.div
                        className="flex flex-col gap-2 justify-between min-w-64"
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
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
                            <Image
                                src={linkArrowRotated}
                                alt="link arrow"
                                width={25}
                                className={`absolute top-0 right-10 ${styles.arrow}`}
                            />
                            <div
                                className={`jetbrainsmono-regular gap-2 cursor-pointer absolute flex items-center justify-center ${styles.contactame}`}
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
                    </motion.div>
                    <div className="flex flex-col gap-8 max-w-2xl justify-between">
                        <motion.div
                            className="flex gap-3 items-center -mb-4"
                            initial={{ opacity: 0, y: 70 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: 0.2,
                            }}
                        >
                            <DotTitle>Yubal de Fuente</DotTitle>
                        </motion.div>
                        <motion.h1
                            className={`lg:text-8xl md:text-7xl sm:text-6xl text-[3rem] max-[310px]:text-[2.5rem] leading-none text-shadow-glow neuemontreal-medium tracking-tight ${styles.title}`}
                            initial={{ opacity: 0, y: 70 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: 0.3,
                            }}
                        >
                            Diseñador y Desarrollador
                        </motion.h1>
                        <motion.p
                            className="text-xl neuemontreal-regular text-neutral-400"
                            initial={{ opacity: 0, y: 70 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: 0.4,
                            }}
                        >
                            Apasionado del diseño gráfico y la programación, y
                            especializado en el desarrollo web con{" "}
                            <HighlightText>React.</HighlightText>
                        </motion.p>
                        <motion.div
                            className="flex gap-10 justify-center sm:justify-start items-center"
                            initial={{ opacity: 0, y: 70 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: 0.5,
                            }}
                        >
                            {socialLinks.map((button) => (
                                <Magnetic
                                    key={button.name}
                                    animationForce={0.4}
                                >
                                    <a href={button.link}>
                                        <motion.div
                                            whileHover={{
                                                color: button.color,
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <FontAwesomeIcon
                                                icon={button.icon}
                                                size="2x"
                                            />
                                        </motion.div>
                                    </a>
                                </Magnetic>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MainSection;
