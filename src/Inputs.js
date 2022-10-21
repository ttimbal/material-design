import React from 'react';
import {
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Radio,
    RadioGroup,
    TextField
} from "@mui/material";

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

function Inputs(props) {
    return (
        <div className={'container'}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                    />
                    <TextField
                        disabled
                        id="outlined-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField id="outlined-search" label="Search field" type="search"/>
                </div>
                <div>
                    <TextField
                        required
                        id="filled-required"
                        label="Required"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <TextField
                        disabled
                        id="filled-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <TextField
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                    />
                    <TextField
                        id="filled-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                    />
                    <TextField
                        id="filled-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                    />
                    <TextField
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled"
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="standard-required"
                        label="Required"
                        defaultValue="Hello World"
                        variant="standard"
                    />
                    <TextField
                        disabled
                        id="standard-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                        variant="standard"
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <TextField
                        id="standard-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="standard"
                    />
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                    />
                    <TextField
                        id="standard-search"
                        label="Search field"
                        type="search"
                        variant="standard"
                    />
                </div>
            </Box>
            <Box>
                <Checkbox {...label} defaultChecked/>
                <Checkbox {...label} />
                <Checkbox {...label} disabled/>
                <Checkbox {...label} disabled checked/>
            </Box>
            <Box>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked/>} label="Label"/>
                    <FormControlLabel disabled control={<Checkbox/>} label="Disabled"/>
                </FormGroup>
            </Box>
            <Box>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                        <FormControlLabel
                            value="disabled"
                            disabled
                            control={<Radio />}
                            label="other"
                        />
                    </RadioGroup>
                </FormControl>
            </Box>
        </div>
    );
}

export default Inputs;