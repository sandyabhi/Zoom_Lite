import React, { useState, useContext } from 'react'
import { Button, TextField, Grid, Typography, Container, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { SocketContext } from '../SocketContext'

function Options({ children }) {

    const { me, name, setName, callAccepted, callEnded, callUser, leaveCall } = useContext(SocketContext)

    const [idToCall, setIdToCall] = useState("")

    return (
        <Container >
            <Paper elevation={10}>
                <form noValidate autoComplete="off">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Typography gutterBottom variant="h6">
                                Acoount Info
                                <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                <CopyToClipboard text={me}>
                                    <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                                        Copy your ID
                                    </Button>
                                </CopyToClipboard>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography gutterBottom variant="h6"> Make a call </Typography>
                            <TextField label="idToCall" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                            {callAccepted && !callEnded ? (
                                <Button variant="contained" color="secondary" fullWidth
                                    startIcon={<PhoneDisabled fontSize="large" />}
                                    onClick={leaveCall} > Hang UP</Button>
                            ) : (
                                <Button variant="contained" color="primary" fullWidth
                                    startIcon={<Phone fontSize="large" />}
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
