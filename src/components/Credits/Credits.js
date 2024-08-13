import { AiFillGithub } from "react-icons/ai";

import { Flex, Icon, Link, Text } from "@chakra-ui/react";

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
                <Icon 
                    as={AiFillGithub}
                    boxSize={10}
                    color="gray.700"
                    transition="all 0.2s ease-in-out"
                    _hover={{color: "white"}}
                />
            </Link>

            <Text color="gray.600">&copy; 2024 Amira Mohamed</Text>

        </Flex>

    );

};

export default Credits;