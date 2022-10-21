import React from 'react';
import {Button} from "@mui/material";

function Buttons(props) {
    return (
        <div className={'container'}>
            <Button variant="text">Text</Button>
            <Button disabled>Disabled</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="outlined" disabled>
                Disabled
            </Button>
            <Button variant="contained">Contained</Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
        </div>
    );
}

export default Buttons;