import { LogoGithub } from "@chakra-icons/ionicons";
import { Flex, Link, Text } from "@chakra-ui/react";

const Credits = () => {

    return (

        <Flex
            direction="column"
            align="center"
            gap={4}
        >

            <Link 
                href="https://github.com/amira-m-m/react-calculator"
                target="_self"
                isExternal
            >
                <LogoGithub boxSize={10} />
            </Link>

            <Text>&copy; 2024 Amira Mohamed</Text>

        </Flex>

    );

};

export default Credits;