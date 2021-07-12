import React from 'react'
import { Typography, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    color: 'purple',
    backgroundColor:'grey'
  }
}))

function App() {
  const classes = useStyles()
  return (
    <div>
      <AppBar position='static' color="inherit" className={classes.appBar}>
        <Typography variant='h2' align='center'>Vido chat</Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  )
}

export default App
