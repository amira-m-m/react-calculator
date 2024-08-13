import { VStack } from "@chakra-ui/react";

import MemoryEntry from "./MemoryEntry"

const MemoryList = () => {

    return (

        <VStack
            w="100%"
            gap={4}
        >
            <MemoryEntry />
            <MemoryEntry />
            <MemoryEntry />
        </VStack>

    );

};

export default MemoryList;