import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "./useIsMobile";

export const useScrollVertical = (
    scrollDirection = 1,
    initScroll = 250,
    endScroll = -300,
    rotateDirection = 1,
    initRotate = 0,
    endRotate = 360,
    useOffset = true
) => {
    const {isMobile} = useIsMobile();
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
    if (isMobile) {
        return { containerY, translateY: 0, rotate: 0 };
    }
    return { containerY, translateY, rotate };
};
