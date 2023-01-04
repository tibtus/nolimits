import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#333333' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const styleGridHeader = {
    backgroundColor : "#333333",
    borderRadius : "0px",
    color: "#fff",
};

export default function Homepage() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={12}  >
                    <Item style={styleGridHeader} >xs=12</Item>
                </Grid>

                <Grid item xs={2}>
                    <Item>xs=2</Item>
                </Grid>

                <Grid item xs={8}>
                    <Item>xs=8</Item>
                </Grid>

                <Grid item xs={2}>
                    <Item>xs=2</Item>
                </Grid>

            </Grid>
        </Box>
    );
}