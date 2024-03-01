import { motion } from "framer-motion";
import { useScroll, useSpring } from "framer-motion";

const ProgressBar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001,
    });

    return <motion.div className="progress-bar-top" style={{ scaleX }} />;
};

export default ProgressBar;
