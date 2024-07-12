import React from "react";
import logo from "../../assets/kolchi.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IoSearchSharp } from "react-icons/io5";
import "../Header/header.css";
import { IoPersonCircleSharp } from "react-icons/io5";

function Header() {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };


  return (
    <div className="header">
      <img src={logo} alt="kolchi"></img>
      {/* search bar*/}
      <div className="search">
        <div>
          <Button onClick={handleClickOpen}>Where</Button>
          <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitle>Where</DialogTitle>
            <DialogContent>
              <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-dialog-select-label">Where</InputLabel>
                  <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    value={age}
                    onChange={handleChange}
                    input={<OutlinedInput label="Age" />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Agadir</MenuItem>
                    <MenuItem value={20}>Marakech</MenuItem>
                    <MenuItem value={30}>Tanger</MenuItem>
                    <MenuItem value={30}>Anza</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
          </Dialog>
        </div>
        <div className="what">
          <Button onClick={handleClickOpen}>What</Button>
          <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitle>what</DialogTitle>
            <DialogContent>
              <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-dialog-select-label">Where</InputLabel>
                  <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    value={age}
                    onChange={handleChange}
                    input={<OutlinedInput label="Age" />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Agadir</MenuItem>
                    <MenuItem value={20}>Marakech</MenuItem>
                    <MenuItem value={30}>Tanger</MenuItem>
                    <MenuItem value={30}>Anza</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
          </Dialog>
        </div>
        <div className="search-button">
          <IoSearchSharp className="srch-icon"></IoSearchSharp>
        </div>
      </div>
      <div className="login-side">
        <a href="/restaurant">
          <div className="addbusiness">
            <IoPersonCircleSharp className="logicon"></IoPersonCircleSharp>
            <p>Add Your Business</p>
          </div>
        </a>
        <div>
          <a href="/login">
            <p>Sign up</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
