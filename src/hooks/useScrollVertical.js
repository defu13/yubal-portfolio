import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const useScrollVertical = (initScroll = 250, endScroll = -300, rotateDirection = 1, initRotate = 0, endRotate = 360, useOffset = true) => {
    const containerY = useRef();
    const { scrollYProgress } = useScroll({
        target: containerY,
        offset: useOffset ? ["start end", "end start"] : undefined,
    });
    const direction = 1;
    const translateY = useTransform(
        scrollYProgress,
        [0, 1],
        [initScroll * direction, endScroll * direction]
    );
    const rotate = useTransform(scrollYProgress, [0, 1], [initRotate, endRotate * rotateDirection]);
    return { containerY, translateY, rotate };
};
