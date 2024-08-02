"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./Home.module.css";
import profilePic from "../assets/images/rsz_fotoperfil_nueva-edit.jpg";
import Magnetic from "@/src/components/Magnetic/Magnetic";
import Floating from "@/src/components/Floating/Floating";

export default function Home() {
    const [number, setNumber] = useState(1);
    const increment = () => {
        setNumber((prevNumber) => prevNumber + 1);
    };
    return (
        <main className="flex flex-col items-center justify-between">
            <div
                className={`flex size-full items-center justify-center ${styles.header_container}`}
            >
                <div className="flex gap-10">
                    <div className="flex flex-col gap-8">
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
                                <button className="poppins-regular bg-grey-dark rounded-full h-14 w-full">
                                    Contáctame
                                </button>
                            </Magnetic>
                        </Floating>
                    </div>
                    <div className="flex flex-col gap-8 max-w-xl">
                        <h1 className="nyghtserif-regular text-6xl">
                            Diseñador y Desarrollador
                        </h1>
                        <p className="text-xl">
                            Especializado en desarrollo con React y apasionado
                            del diseño gráfico
                        </p>
                    </div>
                </div>
            </div>
            <div></div>
        </main>
    );
}
