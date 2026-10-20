"use client";
import React, { useEffect, useState } from "react";
import Floating from "../Floating/Floating";
import Magnetic from "../Magnetic/Magnetic";
import HighlightText from "../HighlightText/HighlightText";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MainSection.module.css";
import { socialLinks } from "@/data/data";
import { useScrollVertical } from "@/src/hooks/useScrollVertical";
import AnimatedEntrance from "../AnimatedEntrance/AnimatedEntrance";
import { useIsMobile } from "@/src/hooks/useIsMobile";
import { MdArrowDownward, MdArrowForward } from "react-icons/md";
import Tooltip from "../Tooltip/Tooltip";
import { useTheme } from "@/src/context/ThemeContext";
import AsciiFlashGroup from "../AsciiFlashGroup/AsciiFlashGroup";
import ColorBends from "../ui/ColorBends";
import Noise from "../ui/Noise";
import ContactTicket from "../ContactTicket/ContactTicket";
import { AsthreeRender } from "@defu13/asthree-react";

function MainSection() {
    const [isCopied, setIsCopied] = useState(false);
    const { translateY } = useScrollVertical(1, 100, -700);
    const isMobile = useIsMobile();
    const { theme } = useTheme();

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

    // Función para copiar al portapapeles

    // const handleCopyClipboard = () => {
    //     navigator.clipboard.writeText("ydefuente@gmail.com");
    //     setIsCopied(true);
    // };

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
                className={`flex flex-col items-center justify-center relative z-5 w-full overflow-x-clip ${styles.header_container}`}
            >
                <div className="flex flex-col xl:flex-row gap-16 md:gap-10 justify-center p-5 items-center">
                    {/* Información personal y redes */}
                    <div className="flex flex-col gap-4 max-w-2xl justify-between flex-1 min-w-0 xl:min-w-xl">
                        <AnimatedEntrance
                            className="flex gap-3 items-center -mb-4"
                            delay={0.2}
                        >
                            <p className="neuemontreal-medium dark:text-neutral-400 text-neutral-600 text-sm">
                                Diseñador UI & UX / Desarrollador Front-End
                            </p>
                            <AsciiFlashGroup
                                color={theme === "dark" ? "#f5f5f5" : "#101010"}
                            />
                        </AnimatedEntrance>
                        <AnimatedEntrance delay={0.3}>
                            <h1
                                className={`whitespace-nowrap uppercase lg:text-8xl md:text-7xl sm:text-5xl text-[3rem] max-[310px]:text-[2.5rem] leading-[0.9] neuemontreal-medium tracking-tight ${styles.title}`}
                            >
                                {/* <HighlightTitle glow={false} monocrome={true}>
                                    Diseñador &nbsp;
                                </HighlightTitle> */}
                                Yubal
                                <br />
                                De Fuente
                            </h1>
                        </AnimatedEntrance>
                        <AnimatedEntrance delay={0.4}>
                            <p className="text-md neuemontreal-regular dark:text-neutral-400 text-neutral-600">
                                Apasionado del diseño gráfico y la programación,
                                y especializado en el desarrollo front-end con
                                React.
                                {/* <HighlightText>React.</HighlightText> */}
                            </p>
                        </AnimatedEntrance>
                        <AnimatedEntrance delay={0.5} className="flex">
                            <a
                                href="/yubal_cv.pdf"
                                className="flex"
                                target="_blank"
                            >
                                <HighlightText glow={false} shineHover={true}>
                                    <div
                                        className={`flex -mt-3 gap-2 items-center ${styles.arrow_container}`}
                                    >
                                        <p className="text-base neuemontreal-regular flex">
                                            Echa un ojo a mi &nbsp;
                                            <span
                                                className={`${styles.letter_c}`}
                                            >
                                                C
                                            </span>
                                            <span
                                                className={`${styles.letter_v}`}
                                            >
                                                V
                                            </span>
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
                            className="flex md:gap-10 gap-4 justify-start items-center"
                            delay={0.6}
                        >
                            {socialLinks.map((button, index) => (
                                <Magnetic animationForce={0.4} key={index}>
                                    <a href={button.link} target="_blank">
                                        <Tooltip
                                            showArrow={true}
                                            placement="top"
                                            content={button.name}
                                        >
                                            <motion.div
                                                whileHover={{
                                                    color:
                                                        theme === "dark"
                                                            ? "#f5f5f5"
                                                            : "#232323",
                                                }}
                                                transition={{ duration: 0.2 }}
                                                style={{
                                                    color: button.color,
                                                }}
                                            >
                                                <FontAwesomeIcon
                                                    icon={button.icon}
                                                    size="2x"
                                                    className="shine-hover"
                                                />
                                            </motion.div>
                                        </Tooltip>
                                    </a>
                                </Magnetic>
                            ))}
                        </AnimatedEntrance>
                    </div>

                    {/* Componente de ticket de contacto */}
                    <div className="flex justify-center items-center flex-1 min-w-0 w-[80%] xl:min-w-xl">
                        <AnimatedEntrance className="w-full h-full">
                            <ContactTicket />
                        </AnimatedEntrance>
                    </div>
                </div>

                {/* Boton flecha hacia abajo */}
                <AnimatedEntrance
                    style={{ y: isMobile ? 0 : translateY }}
                    className="hidden xl:flex"
                    delay={0.7}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <Floating animationForce={1.5} speed={2}>
                        <button
                            onClick={() => scrollToElement("latest-projects")}
                            className="p-2 rounded-full cursor-pointer"
                        >
                            <MdArrowDownward size="3rem" />
                        </button>
                    </Floating>
                </AnimatedEntrance>
            </div>

            {/* Separator */}
            <div
                className="w-full h-px"
                style={{
                    background:
                        "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, .08) 30%, rgba(255, 255, 255, .08) 70%, transparent 100%)",
                }}
            />

            {/* Fondo */}

            {/* <motion.div
                className="w-full h-full absolute z-[-2] overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.75,
                    ease: "easeOut",
                    delay: 1,
                }}
            >
                <AsthreeRender
                    model="/models/user-model.glb"
                    hdr="/hdr/studio.hdr"
                    enableOrbit={false}
                    enableZoom={false}
                    settings={{
                        model: {
                            scale: 3,
                            position: { x: 0, y: -3, z: 0 },
                            rotation: { x: 0, y: 0, z: 0 },
                            tilt: { forward: 0, left: 0 },
                            autoRotate: true,
                            autoRotateSpeed: 0.15,
                        },
                    }}
                />
            </motion.div> */}

            <div className="hero-fade" />
            <div className="absolute top-0 w-full h-full -z-10">
                <div className="absolute h-full w-full opacity-15">
                    <Noise />
                </div>
                <div className="absolutew-full h-full opacity-50">
                    <ColorBends
                        colors={["#6B51F0"]}
                        bandWidth={1.8}
                        frequency={0.9}
                        parallax={0.5}
                        noise={0}
                        rotation={60}
                        scale={1.4}
                        speed={0.1}
                    />
                </div>
            </div>
        </>
    );
}

export default MainSection;
