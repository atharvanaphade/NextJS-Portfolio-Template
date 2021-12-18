import { Text, VStack } from "@chakra-ui/layout";

const Footer = () => {
    return (
        <VStack alignItems='center' bg="blackAlpha.900" py={['5px', '5px', '20px']}>
            <Text alignItems='center' color='gray.300' fontSize={['xl', 'lg', '2xl']}>
                Copyright © 2021 | Atharva Naphade
            </Text>
        </VStack>
    );
}

export default Footer;