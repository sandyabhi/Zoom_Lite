import React, { useContext } from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SocketContext } from '../SocketContext'

function VideoPlayer() {
    const { name, callAccepted, myVideo, callEnded, stream, call } = useContext(SocketContext)
    return (
        <Grid container>
            {/* My Video */}
            {stream &&
                (<Paper>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
                        <video playsInline muted ref={myVideo} autoPlay />
                    </Grid>
                </Paper>)}


            {/* Other User Video */}
            {callAccepted && !callEnded && (
                <Paper>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>{call.name || 'Name'} </Typography>
                        <video playsInline ref={userVideo} autoPlay />
                    </Grid>
                </Paper>)}
        </Grid>
    )
}

export default VideoPlayer
