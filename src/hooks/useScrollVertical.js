import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const useScrollVertical = () => {
    const containerY = useRef();
    const { scrollYProgress } = useScroll({
        target: containerY,
        offset: ["start end", "end start"],
    });
    const direction = 1;
    const translateY = useTransform(
        scrollYProgress,
        [0, 1],
        [150 * direction, -500 * direction]
    );
    return {containerY, translateY};
};