import {  Button, TextField } from "@mui/material";

export function Login() {
  return (
    <div className="login">

      <img className="login-img" alt={"img"} src={"https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtZXJhJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}/>

      <div className="login-field">
      <h2>Login</h2>
      <TextField id="filled-basic" label="User Name" variant="filled" />
      <TextField id="filled-basic" label="Password" variant="filled" />
      <Button variant="contained" color="secondary">Login</Button>
      </div>
      
    </div>
  );
}
