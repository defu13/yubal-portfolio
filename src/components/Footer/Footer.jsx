"use client";
import React from "react";
import Link from "next/link";
import { navigation, socialLinks, contactData } from "@/data/data";
import { motion } from "framer-motion";
import { useIsMobile } from "@/src/hooks/useIsMobile";
import { MdArrowOutward } from "react-icons/md";
import LogoIcon from "../LogoIcon/LogoIcon";
import { useTheme } from "@/src/context/ThemeContext";

function Footer() {
    const isMobile = useIsMobile();
    const { theme } = useTheme();

    return (
        <div
            className="h-[100vh] relative"
            style={{ clipPath: "polygon( 0% 0, 100% 0%, 100% 100%, 0 100% )" }}
        >
            <footer
                className="flex sm:py-24 py-20 w-full justify-center dark:bg-neutral-950 bg-neutral-900 lg:px-24 px-5 h-[100vh] fixed bottom-0"
                // style={{ minHeight: isMobile ? "100vh" : "unset" }}
            >
                <div className="flex md:flex-row lg:max-w-7xl w-full justify-between flex-col-reverse">
                    <div className="flex flex-col justify-end gap-6">
                        <div className="flex gap-6 max-w-72">
                            <LogoIcon
                                width={48}
                                height={48}
                                style={{ display: isMobile ? "none" : "flex" }}
                            />
                            <div className="flex flex-col gap-1">
                                <p className="text-gradient">
                                    © 2025 Yubal De Fuente.
                                </p>
                                <p className="text-neutral-500 text-sm">
                                    Hecho con pasión y dedicación {"<3"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end gap-20">
                        <div className="flex gap-16 min-[400px]:flex-row min-[400px]:gap-24 flex-col">
                            <div className="flex flex-col gap-6">
                                <p className="text-xs text-neutral-500">
                                    SECCIONES
                                </p>
                                <div className="flex flex-col gap-3">
                                    {navigation.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="text-base text-neutral-100 hover:text-neutral-300"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <p className="text-xs text-neutral-500">
                                    CONTACTO
                                </p>
                                <div className="flex flex-col gap-3">
                                    <Link
                                        href={socialLinks[1].link}
                                        target="_blank"
                                        className="text-base text-neutral-100 hover:text-neutral-300"
                                    >
                                        <div className="flex gap-1 ">
                                            <p>{socialLinks[1].name}</p>
                                            <MdArrowOutward size={"1rem"} />
                                        </div>
                                    </Link>
                                    {contactData.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.link}
                                            className="text-neutral-100 hover:text-neutral-300"
                                        >
                                            <p>{item.description}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <p className="text-xs text-neutral-500">SOCIAL</p>
                            <div className="dark flex gap-3 min-[345px]:flex-row flex-col">
                                {socialLinks.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                    >
                                        <motion.p
                                            className="shine-hover"
                                            style={{
                                                color: item.color,
                                            }}
                                            whileHover={{
                                                color: "#f5f5f5",
                                            }}
                                        >
                                            {item.name}
                                        </motion.p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
