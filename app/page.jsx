"use client";
import Image from "next/image";
import styles from "./Home.module.css";
import profilePic from "../assets/images/rsz_fotoperfil_nueva-edit.jpg";
import dribbblePic from "../assets/images/dribbble.jpg";
import Magnetic from "@/src/components/Magnetic/Magnetic";
import Floating from "@/src/components/Floating/Floating";
import {
    faGithub,
    faLinkedin,
    faInstagram,
    faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import {
    AnimatePresence,
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
    const [showOverlay, setShowOverlay] = useState(false);
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });
    const direction = 1;
    const translateY = useTransform(
        scrollYProgress,
        [0, 1],
        [150 * direction, -200 * direction]
    );

    const socialButtons = [
        {
            name: "github",
            link: "https://github.com/defu13",
            icon: faGithub,
            color: "#2dba4e",
        },
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/y-defuente/",
            icon: faLinkedin,
            color: "#0e76a8",
        },
        {
            name: "instagram",
            link: "https://www.instagram.com/treze.st/",
            icon: faInstagram,
            color: "#E1306C",
        },
        {
            name: "dribbble",
            link: "https://dribbble.com/trezestudio",
            icon: faDribbble,
            color: "#f4588e",
        },
    ];

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
                            <h1 className="sm:text-8xl text-6xl text-shadow-glow neuemontreal-medium tracking-tight">
                                Diseñador y Desarrollador
                            </h1>
                            <p className="text-xl neuemontreal-regular text-neutral-500">
                                Apasionado del diseño gráfico y la programación,
                                y especializado en el desarrollo web con{" "}
                                <span className="text-neutral-100 neuemontreal-medium text-shadow-glow">
                                    React.
                                </span>
                                {/* <br />
                                <br />
                                Una combinación de creatividad y habilidades
                                técnicas es ideal para la creación de soluciones
                                innovadoras. */}
                            </p>
                            <div className="flex gap-10 justify-center sm:justify-start items-center">
                                {socialButtons.map((button) => (
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
                <section>
                    <div className="flex flex-col p-5 gap-12">
                        <div className="neuemontreal-medium text-6xl max-w-5xl text-left tracking-tight">
                            Una combinación de creatividad y habilidades
                            técnicas es lo necesario para conseguir
                            <span className="gloock-regular italic text-shadow-glow text-slate-300 tracking-normal">
                                &nbsp;interfaces únicas.
                            </span>
                        </div>
                        <motion.div
                            className="flex gap-8"
                            ref={container}
                            style={{
                                y: translateY,
                            }}
                        >
                            <Link href="/proyectos">
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
                                                    className="flex z-20 gap-4 items-center text-2xl mb-14"
                                                    initial={{ y: 20 }}
                                                    animate={{ y: 0 }}
                                                    exit={{ y: 20 }}
                                                >
                                                    <p className="neuemontreal-regular">
                                                        Proyectos
                                                    </p>
                                                    <FontAwesomeIcon
                                                        icon={faArrowTrendUp}
                                                        width={25}
                                                    />
                                                </motion.div>
                                                <div className="rounded-xl absolute inset-0 pointer-events-none w-full bg-gradient-to-t from-neutral-950 to-transparent to-90%" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    <Image
                                        src={dribbblePic}
                                        width={700}
                                        alt="profile picture of author"
                                        className="rounded-xl"
                                    />
                                </motion.div>
                            </Link>

                            <div></div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <div className="hero-fade"></div>
            <div className="hero-noise"></div>
        </>
    );
}
