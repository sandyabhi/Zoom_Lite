import React, { useState, useContext } from 'react'
import { Button, TextField, Grid, Typography, Container, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { SocketContext } from '../SocketContext'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    gridContainer: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    container: {
        width: '600px',
        margin: '35px 0',
        padding: 0,
        backgroundColor:'grey',
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
    button: {
        padding:0,
        
    },
    padding: {
        padding: 20,
    },
    paper: {
        padding: '10px 20px',
        border: '1px solid black',
        backgroundColor:'grey',
        boxShadow: '0px 0px 15px 5px aqua',
    },
}));

function Options({ children }) {

    const { me, name, setName, callAccepted, callEnded, callUser, leaveCall } = useContext(SocketContext)

    const [idToCall, setIdToCall] = useState("")

    const classes = useStyles();

    return (
        <Container className={classes.container} >
            <Paper elevation={10} className={classes.paper}>
                <form noValidate autoComplete="off" className={classes.root}>
                    <Grid container className={classes.gridContainer}>
                        <Grid item xs={12} md={6} className={classes.padding}>
                            <Typography gutterBottom variant="h6">Acoount Info</Typography>
                            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            <CopyToClipboard text={me}>
                                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                                    Copy your ID
                                </Button>
                            </CopyToClipboard>

                        </Grid>
                        <Grid item xs={12} md={6} className={classes.padding}>
                            <Typography gutterBottom variant="h6"> Make a call </Typography>
                            <TextField label="idToCall" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                            {callAccepted && !callEnded ? (
                                <Button variant="contained" color="secondary" fullWidth
                                    startIcon={<PhoneDisabled fontSize="large" className={classes.button} />}
                                    onClick={leaveCall} > Hang UP</Button>
                            ) : (
                                <Button variant="contained" color="primary" fullWidth
                                    startIcon={<Phone fontSize="large" className={classes.button} />}
                                    onClick={() => callUser(idToCall)}> Call</Button>
                            )}
                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper>
        </Container>
    )
}

export default Options
