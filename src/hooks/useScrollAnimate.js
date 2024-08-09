import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimate = () => {
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
    return {container, translateY};
};