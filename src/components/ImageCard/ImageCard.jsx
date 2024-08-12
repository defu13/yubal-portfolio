"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import linkArrow from "@/assets/images/link_arrow.svg";
import { useState } from "react";
import Magnetic from "../Magnetic/Magnetic";

function ImageCard({ pic }) {
    const [showOverlay, setShowOverlay] = useState(false);
    return (
        <>
            <Magnetic animationForce={0.05}>
                <a href={pic.link} className="min-w-[300px] min-h-[600px]">
                    <motion.div
                        className="relative size-full"
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
                                        className="flex z-20 gap-2 items-center text-2xl mb-14 p-4 rounded-full"
                                        initial={{ y: 20 }}
                                        animate={{ y: 0 }}
                                        exit={{ y: 20 }}
                                    >
                                        <p className="neuemontreal-regular">
                                            Dribbble
                                        </p>
                                        <Image
                                            src={linkArrow}
                                            width={25}
                                            alt="link arrow"
                                        />
                                    </motion.div>

                                    <div className="rounded-xl absolute top-[1px] inset-0 pointer-events-none w-full h-full bg-gradient-to-t from-neutral-900 to-transparent to-90%" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <Image
                            src={pic.img}
                            fill
                            placeholder="blur"
                            alt="dribbble proyect"
                            className="rounded-xl"
                            style={{ objectFit: "cover" }}
                        />
                    </motion.div>
                </a>
            </Magnetic>
        </>
    );
}

export default ImageCard;
