import { Text, VStack, HStack } from "@chakra-ui/layout";
import { FaSun, FaCloudMoon } from 'react-icons/fa';
import { IconButton } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

const ThemeButton = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton 
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <FaSun /> : <FaCloudMoon />}
        />
    )
}

const Footer = () => {
    return (
        <VStack alignItems='center' bg="blackAlpha.900" py={['5px', '5px', '20px']}>
            <HStack>
                <ThemeButton />
                <Text alignItems='center' color='gray.300' fontSize={['xl', 'lg', '2xl']}>
                    Copyright © 2022 | Atharva Naphade
                </Text>
            </HStack>
        </VStack>
    );
}

export default Footer;