import './App.css';
import LayoutFlow from './components/LayoutFlow';
import { ReactFlowProvider } from 'reactflow';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useCallback, useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { login, signup, logout, getFlow } from './trickService.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const username = useRef(null);
  const password = useRef(null);
  const dialogKind = useRef("");
  const rfVal = useRef(null);
  const flowRef = useRef(null);
  const loggedVal = useRef(false);
  const [userTaken, setUserTaken] = useState(false);
  const [wrongPass, setWrongPass] = useState(false);

  //TODO: HANDLE FAILED ATTEMPS TO LOGIN OR SIGNUP
  // const handleSubmit = useCallback(() => {
  //   if (dialogKind.current === "login") {
  //     login({ username: username.current, password: password.current });
  //     flowRef.current = getFlow({ username: username.current, password: password.current }).data;
  //     flowRef.current.setFlow();
  //     setLoggedIn(true);
  //   } else if (dialogKind.current === "signup") {
  //     flowRef.current.toObj();
  //     signup({
  //       username: username.current,
  //       password: password.current, rfInstance: flowRef.current
  //     });
  //   }
  //   setOpen(false);
  // });

  const handleSubmit = useCallback(() => {
    if (userTaken) {
      setUserTaken(false);
    }
    if (wrongPass) {
      setWrongPass(false);
    }
    if (dialogKind.current === "login") {
      const tryLogin = async () => {
        try {
          await login({ username: username.current, password: password.current });
          const flowResponse = await getFlow({ username: username.current, password: password.current });
          rfVal.current = flowResponse.data;
          flowRef.current.setFlow();
          setLoggedIn(true);
          loggedVal.current = true;
          setOpen(false);
        } catch (error) {
          setWrongPass(true);
        }
      }
      tryLogin();
    } else if (dialogKind.current === "signup") {
      const trySignup = async () => {
        flowRef.current.toObj();
        try {
          await signup({ username: username.current, password: password.current, rfInstance: rfVal.current });
          setOpen(false);
        } catch (error) {
          setUserTaken(true);
        }
      }
      trySignup();
    }
  });

  return (
    <div className="App">
      <HeaderComponent
        loggedIn={loggedIn}
        onLoginButton={() => {
          setUserTaken(false);
          setWrongPass(false);
          setTitle("Login");
          dialogKind.current = "login";
          setOpen(true);
        }}
        onRegisterButton={() => {
          setUserTaken(false);
          setWrongPass(false);
          setTitle("Signup");
          dialogKind.current = "signup";
          setOpen(true);
        }}
        onLogoutButton={() => {
          //logout();
          username.current = null; password.current = null
          setLoggedIn(false);
          loggedVal.current = false;
        }} />
      <Dialog open={open} onClose={() => { setOpen(false); username.current = null; password.current = null }}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <TextField
            label="Username"
            fullWidth
            margin="dense"
            onChange={(evt) => {
              username.current = evt.target.value;
            }}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            label="Password"
            fullWidth
            margin="dense"
            onChange={(evt) => {
              password.current = evt.target.value;
            }}
          />
        </DialogContent>
        {userTaken ? <Alert severity="error">Sorry, this username is already taken.</Alert> : null}
        {wrongPass ? <Alert severity="error">Wrong password.</Alert> : null}
        <DialogActions>
          <Button onClick={() => { setOpen(false); username.current = null; password.current = null }}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      <div className="react-flow-container">
        <ReactFlowProvider>
          <LayoutFlow loggedVal={loggedVal} username={username} password={password} rfVal={rfVal} ref={flowRef} />
        </ReactFlowProvider>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
