import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {
  Spacing,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Button,
  Switch,
  Typography,
  styled,
  Tooltip,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "./Dummy.css";
import { Business, Email, Home, LocationCity, Phone, PinDrop, Public, Villa, VillaOutlined } from "@mui/icons-material";


// const VisuallyHiddenInput = styled('input')({
//   clip: 'rect(0 0 0 0)',
//   clipPath: 'inset(50%)',
//   height: 1,
//   overflow: 'hidden',
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   whiteSpace: 'nowrap',
//   width: 1,
// });

const initialValues = {
  fullname: "",
  phone: "",
  email: "",
  address: "",
  country: "",
  city:"",
  zip:"",
  state:"",
  role:"",
  company:"",
};

const Dummy = () => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(initialValues);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

function handleSubmit(){
  console.log(values);
}

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const handleSwitch = () => {
    setOpen(!open);
  };
  const notify = () => toast("Changes successfully made!");



  return (
    <>
      <Box
        Container
        sx={{
          display: "flex",
          alignItems:"flex-start",
          flexDirection: "row",
          justifyContent: "space-",
          margin: "30px",
          backgroundColor: "whitesmoke",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            width: "30%",
            height: "100vh",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "5px 5px 10px #ccc",
            ":hover": { boxShadow: "10px 10px 20px #ccc" },
          }}
        >
          <Grid style={{display:'flex', flexDirection:'row', justifyContent:'flex-end' }}>
            {" "}
            <Button >
              {open ? "banned" : "active"}
            </Button>{" "}
          </Grid>
          <Grid style={{ textAlign: "center", marginTop: "20px", display:'flex', flexDirection:'row', justifyContent:'center'}}>
           <Tooltip title="update photo"> <label for="upload-input" className="upload-btn" >
   
              {/* <h1 className="upload-text">Upload File</h1> */}
              <img src="./assets/tourist.png"/>
              </label>
              <input className="upload-input" id="upload-input" type="file" ></input></Tooltip>
            
          </Grid>
          <Grid>
            <h6 style={{ color:"rgb(165, 158, 171)", textAlign: "center" }}>
              Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
            </h6>
          </Grid>
          <Grid container className="flex">
            <Grid>
              <h6 style={{color:'rgb(33, 63, 56)'}}>Banned</h6>
              <p style={{color:"rgb(99, 115, 129)"}}>Apply disable account</p>
            </Grid>

            <Grid>
              <Switch {...label} defaultChecked onClick={handleSwitch} />
            </Grid>
          </Grid>
          <Grid container className="flex">
            <Grid>
              <h6 style={{color:'rgb(33, 63, 56)'}}>Email</h6>
              <p style={{color:"rgb(99, 115, 129)"}}>
                Disabling this will automatically send <br />
                the user a verification email
              </p>
            </Grid>

            <Grid>
              <Switch {...label} defaultChecked onClick={handleSwitch} />
            </Grid>
          </Grid>
          <Grid style={{ textAlign: "center"}}>
            <button className="delbtn" >Delete User</button>
          </Grid>
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            width: "70%",
            marginLeft: "26px",
            borderRadius: "10px",
            boxShadow: "5px 5px 10px #ccc",
            ":hover": { boxShadow: "10px 10px 20px #ccc" },
          }}
        >
          <form>
            <Box container className="employee-details-wrapper">
              <Typography variant="h6" padding={2} textAlign={"center"} fontWeight={"Bold"} color={"rgb(0, 162, 255)"}>
                Employee Details
              </Typography>
              <Grid container columnSpacing={2}>
                <Grid item xs={6}>
                  {" "}
                  <TextField required
                    value={values.fullname}
                    onChange={handleInputChange}
                    type="text"
                    label="FullName"
                    name="fullname"
                    variant="standard"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    margin="normal"
                    fullWidth
                    size="small"
                  />{" "}
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <TextField required
                    value={values.phone}
                    onChange={handleInputChange}
                    type="text"
                    name="phone"
                    label="Phone Number"
                    variant="standard"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Phone />
                        </InputAdornment>
                      ),
                    }}
                    margin="normal"
                    fullWidth
                    size="small"
                  />
                </Grid>

                <Grid item xs={6}>
                  {" "}
                  <TextField required
                    value={values.email}
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    label="Email"
                    variant="standard"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email />
                        </InputAdornment>
                      ),
                    }}
                    margin="normal"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <TextField required
                    value={values.address}
                    onChange={handleInputChange}
                    type="text"
                    name="address"
                    label="Address"
                    variant="standard"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Home/>
                        </InputAdornment>
                      ),
                    }}
                    margin="normal"
                    fullWidth
                    size="small"

                  />
                </Grid>

                <Grid item xs={6}>
                  {" "}
                  <TextField required
                    value={values.state}
                    onChange={handleInputChange}
                   
                    type="text"
                    name="state"
                    label="state/region"
                    variant="standard"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <VillaOutlined />
                        </InputAdornment>
                      ),
                    }}
                    margin="normal"
                    fullWidth
                    size="small"
                  />{" "}
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <TextField required
                    value={values.city}
                    onChange={handleInputChange}
                    type="text"
                    name="city"
                    label="City"
                    variant="standard"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationCity />
                        </InputAdornment>
                      ),
                    }}
                    margin="normal"
                    fullWidth
                    size="small"
                  />{" "}
                </Grid>

                <Grid item xs={6}>
                  {" "}
                  <TextField required
                    value={values.zip}
                    onChange={handleInputChange}
                    type="text"
                    name="zip"
                    label="Zip/Code"
                    variant="standard"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PinDrop />
                        </InputAdornment>
                      ),
                    }}
                    margin="normal"
                    fullWidth
                    size="small"
                  />{" "}
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <TextField required
                    value={values.company}
                    onChange={handleInputChange}
                    type="text"
                    name="company"
                    label="Company"
                    variant="standard"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Business />
                        </InputAdornment>
                      ),
                    }}
                    margin="normal"
                    fullWidth
                    size="small"
                  />{" "}
                </Grid>

                <Grid item xs={6}>
                  {" "}
                  <TextField required
                    value={values.country}
                    onChange={handleInputChange}
                    type="text"
                    name="country"
                    label="Country"
                    variant="standard"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Public />
                        </InputAdornment>
                      ),
                    }}
                    margin="normal"
                    fullWidth
                    size="small"
                  />{" "}
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <TextField
                    required
                    value={values.role}
                    onChange={handleInputChange}
                    type="text"
                    label="Role"
                    name="role"
                    variant="standard"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    margin="normal"
                    fullWidth
                    size="small"
                  
                  />{" "}
                </Grid>
              </Grid>

              <Grid style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}} >
                <button className="savebtn" onClick={handleSubmit} onClick={notify}>Save Changes</button>
                <ToastContainer />
              </Grid>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Dummy;
