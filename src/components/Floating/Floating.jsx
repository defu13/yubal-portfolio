import { motion } from "framer-motion";

export default function Floating({ delay, children, hover, animationForce = 1, speed = 1 }) {
    return (
        <motion.div
            className="flex items-center justify-center"
            animate={["initial"]}
            whileHover={[hover === true ? "grow" : ""]}
            variants={{
                grow: {
                    rotate: 5,
                },
                initial: {
                    y: [-10 * animationForce, 10 * animationForce],
                    transition: {
                        delay,
                        duration: 2 / speed,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
