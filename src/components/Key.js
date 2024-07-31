import { Button } from "@chakra-ui/react";

const Key = (props) => {

    return (

        <Button
            colorScheme = { props.color }
        >
            { props.value }
        </Button>

    );

};

export default Key;