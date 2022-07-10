import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from "react";

const Header = ()=>{
    return (
        <header>
            <AppBar>
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    WhereisMyTR?
                </Typography>
                    <Button color="inherit">NTU Directory</Button>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header;