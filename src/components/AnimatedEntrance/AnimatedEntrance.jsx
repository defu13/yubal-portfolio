import { motion } from "framer-motion";

const AnimatedEntrance = ({
    children,
    delay = 0,
    initial = {opacity: 0, y: 70},
    animate = {opacity: 1, y: 0},
    className = "",
    ...props
}) => {
    return (
        <motion.div
            initial={initial}
            animate={animate}
            transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: delay,
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedEntrance;
