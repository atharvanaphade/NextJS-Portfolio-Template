import { Text, VStack } from "@chakra-ui/layout";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const Footer = () => {
    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear' }}
            className="
                    flex flex-col items-start w-full pt-10
                    px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
                    pt-24 h-full
                "
        >
            <VStack alignItems='center' bg="blackAlpha.900" py={['5px', '5px', '20px']}>
                <Text alignItems='center' color='gray.300' fontSize={['xl', 'lg', '2xl']}>
                    Copyright © 2021 | Atharva Naphade
                </Text>
            </VStack>
        </motion.div>
    );
}

export default Footer;