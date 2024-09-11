import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const useScrollVertical = (
    scrollDirection = 1,
    initScroll = 250,
    endScroll = -300,
    rotateDirection = 1,
    initRotate = 0,
    endRotate = 360,
    useOffset = true
) => {
    const containerY = useRef();
    const { scrollYProgress } = useScroll({
        target: containerY,
        offset: useOffset ? ["start end", "end start"] : undefined,
    });
    const translateY = useTransform(
        scrollYProgress,
        [0, 1],
        [initScroll * scrollDirection, endScroll * scrollDirection]
    );
    const rotate = useTransform(
        scrollYProgress,
        [0, 1],
        [initRotate, endRotate * rotateDirection]
    );
    return { containerY, translateY, rotate };
};
