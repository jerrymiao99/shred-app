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
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { login, signup, logout } from './trickService.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const username = useRef("");
  const password = useRef("");
  const dialogKind = useRef("");
  const flowRef = useRef(null);

  //TODO: HANDLE FAILED ATTEMPS TO LOGIN OR SIGNUP
  const handleSubmit = useCallback(() => {
    if (dialogKind.current === "login") {
      login({ username: username.current, password: password.current });
      setLoggedIn(true);
    } else if (dialogKind.current === "signup") {
      flowRef.current.toObj();
      signup({ username: username.current, password: password.current, rfInstance: flowRef.current });
    }
    setOpen(false);
  });

  return (
    <div className="App">
      <HeaderComponent
        loggedIn={loggedIn}
        onLoginButton={() => {
          setTitle("Login");
          dialogKind.current = "login";
          setOpen(true);
        }}
        onRegisterButton={() => {
          setTitle("Signup");
          dialogKind.current = "signup";
          setOpen(true);
        }}
        onLogoutButton={() => {
          logout();
          setLoggedIn(false);
        }} />
      <Dialog open={open} onClose={() => setOpen(false)}>
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
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      <div className="react-flow-container">
        <ReactFlowProvider>
          <LayoutFlow ref={flowRef} />
        </ReactFlowProvider>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
