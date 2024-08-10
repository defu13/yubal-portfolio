"use client";
import React, { useEffect, useState } from "react";
import Floating from "../Floating/Floating";
import Image from "next/image";
import Magnetic from "../Magnetic/Magnetic";
import HighlightText from "../HighlightText/HighlightText";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MainSection.module.css";
import profilePic from "../../../assets/images/rsz_fotoperfil_nueva-edit.jpg";
import { socialLinks } from "@/data/data";
import Dot from "../Dot/Dot";
import { faClipboard, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import linkArrowRotated from "../../../assets/images/link_arrow_rotated.svg";

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
                    <div className="flex flex-col gap-2 justify-between min-w-64">
                        <Floating>
                            <Image
                                src={profilePic}
                                width={250}
                                height={250}
                                alt="profile picture of author"
                                className="rounded-full"
                            />
                        </Floating>
                        {/* <Floating delay={0.4}> */}
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
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>
                        {/* </Floating> */}
                    </div>
                    <div className="flex flex-col gap-8 max-w-2xl justify-between">
                        <div className="flex gap-3 items-center -mb-4">
                            <Dot />
                            <p className="neuemontreal-medium text-neutral-500">
                                Yubal De Fuente
                            </p>
                        </div>
                        <h1 className="lg:text-8xl md:text-7xl text-6xl text-shadow-glow neuemontreal-medium tracking-tight">
                            Diseñador y Desarrollador
                        </h1>
                        <p className="text-xl neuemontreal-regular text-neutral-400">
                            Apasionado del diseño gráfico y la programación, y
                            especializado en el desarrollo web con{" "}
                            <HighlightText>React.</HighlightText>
                        </p>
                        <div className="flex gap-10 justify-center sm:justify-start items-center">
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
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MainSection;
