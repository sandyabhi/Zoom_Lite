import React from 'react'
import { Typography, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    backgroundColor: 'grey',
    boxShadow: '0px 5px 15px 5px rgb(81, 243, 235)',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

function App() {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <AppBar position='static' color="inherit" className={classes.appBar}>
        <Typography variant='h2' align='center'>Zoom Lite</Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  )
}

export default App
