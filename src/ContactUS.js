import { Button, Card, TextField } from "@mui/material";

export function ContactUS() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-field">
      <TextField sx={{ m: 1, width: '50ch' }} id="outlined-basic" label="Name" variant="outlined" />
      <TextField sx={{ m: 1, width: '50ch' }} id="outlined-basic" label="Contact No" variant="outlined" />
      <TextField sx={{ m: 1, width: '50ch' }} id="outlined-basic" label="Address" variant="outlined" />
      <TextField sx={{ m: 1, width: '50ch' }} id="outlined-basic" label="Email" variant="outlined" />
      <TextField sx={{ m: 1, width: '50ch' }} id="outlined-basic" label="Comments" variant="outlined" />
      <Button variant="contained" color="secondary">Submit</Button>
      </div>
    </div>
  );
}
