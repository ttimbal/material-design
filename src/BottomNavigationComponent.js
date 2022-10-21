import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import {useEffect} from "react";

function refreshMessages() {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

    return Array.from(new Array(3)).map(
        () => messageExamples[getRandomInt(messageExamples.length)],
    );
}

export default function BottomNavigationComponent() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
    const [messages, setMessages] = React.useState(() => refreshMessages());

    useEffect(() => {
        ref.current.ownerDocument.body.scrollTop = 0;
        setMessages(refreshMessages());
    }, [value, setMessages]);

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            <List>
                {messages.map(({ person, message }, index) => (
                    <ListItem key={index + person}>
                        <ListItemAvatar>
                            <Avatar alt="Profile Picture" src={person} />
                        </ListItemAvatar>
                        <ListItemText primary={person} secondary={message} />
                    </ListItem>
                ))}
            </List>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}

const messageExamples = [
    {
        person: 'Pedro Gutierrez',
        message: "Hola como estas?",
    },
    {
        person: 'Andres Alvarez',
        message: 'Hoy toca hacer la exposición',
    },
    {
        person: 'Sebastian Arce',
        message: 'Hiciste la tarea?',
    },
    {
        person: 'Juan Gabriel',
        message: 'Que estas haciendo?',
    },
    {
        person: 'Irene Ramirez',
        message: 'Listo para la exposición?',
    },
];
