import { Button, TextField } from "@mui/material";

export function Register() {

  return (
    <div className="register">
      <h2>Register Here</h2>
      <TextField id="filled-basic" label="First Name" variant="filled" />
      <TextField id="filled-basic" label="Last Name" variant="filled" />
      <TextField id="filled-basic" label="Email " variant="filled" />
      <TextField id="filled-basic" label="Password" variant="filled" />
      <TextField id="filled-basic" label="Confirm Password" variant="filled" />
      <Button variant="contained" color="secondary">Register</Button>
    </div>
  );
}
