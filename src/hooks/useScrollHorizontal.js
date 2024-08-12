import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const useScrollHorizontal = () => {
    const containerX = useRef();

    const {scrollYProgress} = useScroll({
        target: containerX,
        offset: ['start end', 'end start']
    });
    const translateX = useTransform(scrollYProgress, [0, 1], [50, -750]);
    return { containerX, translateX };
}