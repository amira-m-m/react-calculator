import React from 'react';
import { Input } from '@chakra-ui/react';

import { EnteredNumContext } from '../providers/EnteredNumContext';

const Display = () => {

    const { enteredNum } = React.useContext(EnteredNumContext);

    return (

        <Input
            value = { enteredNum }
            readOnly
        />

    );

};

export default Display;