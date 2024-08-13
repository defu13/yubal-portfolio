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
        [250 * direction, -300 * direction]
    );
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    return { containerY, translateY, rotate };
};
