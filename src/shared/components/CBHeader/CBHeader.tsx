import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const AppHeader = () => {
    // const handleSubmit = (e: any) => {
    //     e.preventDefault();
    //     auth.logout(() => {
    //         localStorage.removeItem('token');
    //         props.history.push('/')
    //     });
    // }

    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Menu">
                    </IconButton>
                    <Typography variant="h6">
                        App
                    </Typography>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </header>
    );
}

export default AppHeader;
