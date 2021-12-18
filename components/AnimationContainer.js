import { AnimatePresence, motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const Animation = ({children}) => {
    return(
        <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear', duration: 0.6, delay: 0.2, ease: 'easeInOut' }}
        >
            {children}
        </motion.main>
    )
};

export default Animation;