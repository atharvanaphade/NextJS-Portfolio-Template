import React from "react";
import TOPOLOGY from 'vanta/dist/vanta.topology.min';
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/layout";

const Globe = ({children}) => {
    const [vantaEffect, setVantaEffect] = React.useState(0);
    const myRef = React.useRef(null);
    React.useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                TOPOLOGY({
                    el: myRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    THREE: window.THREE,
                    p5: window.p5,
                })
            )
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        }
    }, [vantaEffect])

    return (
        <Box height='auto'>
            <motion.div 
                height='auto'
                ref={myRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 0.5,
                    delay: 0.5
                }}
            >
                {children}
            </motion.div>
        </Box>
    );
}

export default Globe;