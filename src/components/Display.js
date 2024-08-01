import React from 'react';
import { Input } from '@chakra-ui/react';

import { ChosenNumContext } from '../providers/ChosenNumContext';

const Display = () => {

    const { chosenNum, setChosenNum } = React.useContext(ChosenNumContext);

    return (

        <Input
            value = { chosenNum }
            onChange = { (event) => {
                setChosenNum(event.target.value)
                }
            }
        />

    );

};

export default Display;