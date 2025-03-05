"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/portfolio_logo.png";
import Link from "next/link";
import { navigation, socialLinks, contactData } from "@/data/data";
import link_arrow from "@/assets/images/link_arrow.svg";
import { motion } from "framer-motion";
import { useIsMobile } from "@/src/hooks/useIsMobile";

function Footer() {
    const isMobile = useIsMobile();

    return (
        <div
            className="h-[100vh] relative"
            style={{ clipPath: "polygon( 0% 0, 100% 0%, 100% 100%, 0 100% )" }}
        >
            <footer
                className="flex sm:py-24 py-20 w-full justify-center bg-neutral-950 lg:px-24 px-5 h-[100vh] fixed bottom-0"
                // style={{ minHeight: isMobile ? "100vh" : "unset" }}
            >
                <div className="flex md:flex-row lg:max-w-7xl w-full justify-between flex-col-reverse">
                    <div className="flex flex-col justify-end gap-6">
                        <div className="flex gap-6 max-w-72">
                            <Image
                                src={logo}
                                alt="logo"
                                width={48}
                                className="rounded-full"
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
                        {/* <div className="flex">
                        <p className="text-neutral-400 text-sm">Última actualización el {lastUpdated}</p>
                        </div> */}
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
                                            className="text-base text-neutral-50 hover:text-neutral-300"
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
                                        className="text-base text-neutral-50 hover:text-neutral-300"
                                    >
                                        <div className="flex gap-1 ">
                                            <p>{socialLinks[1].name}</p>
                                            <Image
                                                src={link_arrow}
                                                alt="icon"
                                            />
                                        </div>
                                    </Link>
                                    {contactData.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.link}
                                            className="hover:text-neutral-300"
                                        >
                                            <p>{item.description}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <p className="text-xs text-neutral-500">SOCIAL</p>
                            <div className="flex gap-3 min-[345px]:flex-row flex-col">
                                {socialLinks.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                    >
                                        <motion.p
                                            style={{
                                                color: isMobile
                                                    ? item.color
                                                    : "#fafafa",
                                            }}
                                            whileHover={{
                                                color: item.color,
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
