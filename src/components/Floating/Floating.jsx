import { motion } from "framer-motion";

export default function Floating({ delay, children, hover }) {
    return (
        <motion.div
            animate={["initial"]}
            whileHover={[hover === true ? "grow" : ""]}
            variants={{
                grow: {
                    rotate: 5,
                },
                initial: {
                    y: [-10, 10],
                    transition: {
                        delay,
                        duration: 2,
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
