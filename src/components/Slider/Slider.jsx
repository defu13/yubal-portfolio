"use client";
import { useScrollHorizontal } from "@/src/hooks/useScrollHorizontal";
import { useScrollVertical } from "@/src/hooks/useScrollVertical";
import { motion } from "framer-motion";
import ImageCard from "../ImageCard/ImageCard";
import { dribbblePics } from "@/data/data";

function Slider() {
    const { containerY, translateY } = useScrollVertical();
    const { containerX, translateX } = useScrollHorizontal();
    return (
        <>
            <motion.div
                className="flex gap-48 flex-col w-full overflow-hidden py-12"
                ref={containerY}
                style={{
                    y: translateY,
                }}
            >
                <motion.div
                    className="flex gap-8 flex-shrink-0"
                    ref={containerX}
                    style={{ x: translateX }}
                >
                    {dribbblePics.concat(dribbblePics).map((pic, index) => (
                        <ImageCard pic={pic} key={index} />
                    ))}
                </motion.div>
            </motion.div>
        </>
    );
}

export default Slider;
