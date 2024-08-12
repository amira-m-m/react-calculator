import { IoMdMoon } from 'react-icons/io';
import { Flex, Icon, Link } from "@chakra-ui/react"

const ThemeToggle = () => {

    const handleToggleClick = (event) => {
        event.preventDefault();
    };

    return (

        <Flex
            direction="row"
            align="center"
            justify="flex-end"
            w='100%'
        >
            <Link
                href="#"
                onClick={handleToggleClick}
            >
                <Icon
                    className="glow-icon"
                    as={IoMdMoon}
                    boxSize={6}
                    color="gray.700"
                    transition="all 0.2s ease-in-out"
                    _hover={{color: "white"}}
                />
            </Link>
        </Flex>

    );
    
};

export default ThemeToggle;