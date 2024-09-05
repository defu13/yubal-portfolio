"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/portfolio_logo.png";
import Link from "next/link";
import { navigation, socialLinks, contactData } from "@/data/data";
import link_arrow from "@/assets/images/link_arrow.svg";
import { motion } from "framer-motion";

function Footer() {
    const isMobile = window.innerWidth < 640;

    // Obtener la fecha actual (última actualización)
    const lastUpdated = new Intl.DateTimeFormat("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
    }).format(new Date());

    return (
        <footer
            className="flex mt-32 py-24 w-full justify-center border-t-[1px] border-neutral-800 bg-neutral-950 lg:px-24 px-5"
            style={{ minHeight: isMobile ? "100vh" : "unset" }}
        >
            <div className="flex md:flex-row lg:max-w-7xl w-full md:gap-12 gap-24 justify-between flex-col-reverse">
                <div className="flex flex-col justify-end gap-6">
                    <div className="flex gap-6 max-w-72">
                        <Image
                            src={logo}
                            alt="logo"
                            width={48}
                            className="rounded-full min-[345px]:flex hidden"
                        />
                        <div className="flex flex-col gap-1">
                            <p className="text-gradient">
                                © 2024 Yubal De Fuente.
                            </p>
                            <p className="text-neutral-400 text-sm">
                                Hecho con pasión y dedicación{" <3"}
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <p className="text-neutral-400 text-sm">Última actualización el {lastUpdated}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-16">
                    <div className="flex gap-16 min-[400px]:flex-row min-[400px]:gap-24 flex-col">
                        <div className="flex flex-col gap-6">
                            <p className="text-xs text-neutral-400">
                                SECCIONES
                            </p>
                            <div className="flex flex-col gap-3">
                                {navigation.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="text-base text-neutral-50"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <p className="text-xs text-neutral-400">CONTACTO</p>
                            <div className="flex flex-col gap-3">
                                <Link
                                    href={socialLinks[1].link}
                                    target="_blank"
                                    className="text-base text-neutral-50"
                                >
                                    <div className="flex gap-1">
                                        <p>{socialLinks[1].name}</p>
                                        <Image src={link_arrow} alt="icon" />
                                    </div>
                                </Link>
                                {contactData.map((item, index) => (
                                    <Link key={index} href={item.link}>
                                        <p>{item.description}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <p className="text-xs text-neutral-400">SOCIAL</p>
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
    );
}

export default Footer;
