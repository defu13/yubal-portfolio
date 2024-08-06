"use client";
import Image from "next/image";
import styles from "./Home.module.css";
import profilePic from "../assets/images/rsz_fotoperfil_nueva-edit.jpg";
import Magnetic from "@/src/components/Magnetic/Magnetic";
import Floating from "@/src/components/Floating/Floating";
import {
    faGithub,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    // const container = useRef();
    // const { scrollYProgress } = useScroll({
    //     target: container,
    //     offset: ["start end", "end start"],
    // });
    // const direction = -1;
    // const translateX = useTransform(
    //     scrollYProgress,
    //     [0, 1],
    //     [1500 * direction, -1500 * direction]
    // );
    const socialButtons = [
        { name: "github", link: "https://github.com/defu13", icon: faGithub },
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/y-defuente/",
            icon: faLinkedin,
        },
        {
            name: "instagram",
            link: "https://www.instagram.com/treze.st/",
            icon: faInstagram,
        },
    ];

    const hoverColors = {
        github: "#2dba4e",
        linkedin: "#0e76a8",
        instagram: "#E1306C",
    };

    return (
        <>
            <main
                className={`flex flex-col items-center justify-between ${styles.main}`}
            >
                <div
                    className={`flex flex-col size-full items-center justify-center mt-10 sm:m-0 ${styles.header_container}`}
                >
                    <div className="flex gap-10 sm:gap-16 flex-wrap justify-center p-5">
                        <div className="flex flex-col gap-8 justify-between">
                            <Floating>
                                <Image
                                    src={profilePic}
                                    width={250}
                                    height={250}
                                    alt="profile picture of author"
                                    className="rounded-full"
                                />
                            </Floating>
                            <Floating delay={0.4} hover>
                                <Magnetic>
                                    <button className="jetbrainsmono-regular text-neutral-100 border-neutral-100 border-2 rounded-full h-14 w-full">
                                        Contáctame
                                    </button>
                                </Magnetic>
                            </Floating>
                        </div>
                        <div className="flex flex-col gap-8 max-w-2xl justify-between">
                            <div className="flex gap-3 items-center -mb-4">
                                <div className={styles.dot}></div>
                                <p className="neuemontreal-medium text-neutral-500">
                                    Yubal De Fuente
                                </p>
                            </div>
                            <h1 className="sm:text-8xl text-6xl text-shadow-glow neuemontreal-medium">
                                Diseñador y Desarrollador
                            </h1>
                            <p className="text-xl neuemontreal-regular text-neutral-500">
                                Apasionado del diseño gráfico y la programación,
                                y especializado en el desarrollo web con React.
                                {/* <br />
                                <br />
                                La combinación de creatividad y habilidades
                                técnicas es ideal para la creación de soluciones
                                innovadoras. */}
                            </p>
                            <div className="flex gap-10 justify-center sm:justify-start">
                                {socialButtons.map((button) => (
                                    <Magnetic
                                        key={button.name}
                                        animationForce={0.4}
                                    >
                                        <a href={button.link}>
                                            <motion.div
                                                whileHover={{
                                                    color: hoverColors[
                                                        button.name
                                                    ],
                                                }}
                                                transition={{duration: 0.2}}
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
                    {/* <motion.p
                    ref={container}
                    style={{ x: translateX, left: "0", fontSize: "10rem" }}
                    className="neuemontreal-medium relative italic"
                >
                    Yubal De Fuente
                </motion.p> */}
                </div>
                <div style={{ height: "100vh" }}></div>
            </main>
            <div className="hero-fade"></div>
            <div className="hero-noise"></div>
        </>
    );
}
