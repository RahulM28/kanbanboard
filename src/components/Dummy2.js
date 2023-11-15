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
import "./Dummy2.css";
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
  employeeid: "",
  department: "",
  email: "",
  project: "",
  doj: "",
  firstname:"",
  middlename:"",
  lastname:"",
  dob:"",
  blood:"",
  father:"",
  guardian:"",
  marital:"",
  phone:"",
  alt:"",
  fatherph:"",
  guardianph:"",
  account:"",
  ifsc:"",
  bank:"",
  pan:"",
  aadhar:"",
  correspondence:"",
  permanent:"",
};

const Dummy2 = () => {
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
          margin: "40px",
          backgroundColor: "whitesmoke",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            width: "40%",
            height: "100vh",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "5px 5px 10px #ccc",
            ":hover": { boxShadow: "10px 10px 20px #ccc" },
          }}
        >
          <Grid style={{display:'flex', flexDirection:'row', justifyContent:'flex-end' }}>
            {" "}
            <Button style={{color:"rgb(0, 162, 255)"}}>
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
            <h4 style={{ color:"rgb(145, 158, 171)", textAlign: "center" }}>
              Allowed *.jpeg, *.jpg, *.png, *.gif max size of 4.1 MB
            </h4>
          </Grid>
          <Grid container className="flex">
            <Grid>
              <h4 style={{color:'rgb(44, 44, 54)'}}>Banned</h4>
              <p style={{color:"rgb(99, 115, 129)"}}>Apply disable account</p>
            </Grid>

            <Grid>
              <Switch {...label} defaultChecked onClick={handleSwitch} style={{color:"rgb(0, 162, 255)"}} />
            </Grid>
          </Grid>
          <Grid container className="flex">
            <Grid>
              <h4 style={{color:'rgb(44, 44, 54)'}}>Email</h4>
              <p style={{color:"rgb(99, 115, 129)"}}>
                Disabling this will automatically send <br />
                the user a verification email
              </p>
            </Grid>

            <Grid>
              <Switch {...label} defaultChecked onClick={handleSwitch} style={{color:"rgb(0, 162, 255)"}} />
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
            marginLeft: "24px",
            borderRadius: "10px",
            boxShadow: "5px 5px 10px #ccc",
            ":hover": { boxShadow: "10px 10px 20px #ccc" },
          }}
        >
          <form>
            <Box container className="employee-details-wrapper">
              {/* <Typography variant="h4" padding={2} textAlign={"center"} fontWeight={"Bold"} color={"rgb(0, 142, 255)"}>
                Employee Info
              </Typography> */}
              
                <Grid><Typography className="heading"><h4>Basic Details</h4></Typography></Grid>
                <Grid container columnSpacing={2}>
                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.employeeid}
                    onChange={handleInputChange}
                    type="text"
                    label="Employee ID"
                    name="employeeid"
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
                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.department}
                    onChange={handleInputChange}
                    type="text"
                    name="department"
                    label="Department"
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

                <Grid item xs={4}>
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
                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.project}
                    onChange={handleInputChange}
                    type="text"
                    name="project"
                    label="Project Manager"
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

                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.doj}
                    onChange={handleInputChange}
                   
                    type="text"
                    name="doj"
                    label="Date of joining"
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
                </Grid>

{/* 2nddetails enter */}
               <Grid><Typography className="heading"><h4>Biographical</h4></Typography></Grid>
               <Grid container columnSpacing={2}>
                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.firstname}
                    onChange={handleInputChange}
                    type="text"
                    label="Firstname"
                    name="firstname"
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
                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.middlename}
                    onChange={handleInputChange}
                    type="text"
                    name="middlename"
                    label="Middlename"
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

                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.lastname}
                    onChange={handleInputChange}
                    type="text"
                    name="lastname"
                    label="Lastname"
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
                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.dob}
                    onChange={handleInputChange}
                    type="text"
                    name="dob"
                    label="Date of Birth"
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

                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.blood}
                    onChange={handleInputChange}
                   
                    type="text"
                    name="blood"
                    label="Blood Group"
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

                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.father}
                    onChange={handleInputChange}
                   
                    type="text"
                    name="father"
                    label="Father's Name"
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

                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.guardian}
                    onChange={handleInputChange}
                   
                    type="text"
                    name="guardian"
                    label="Guardian Name"
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

                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.marital}
                    onChange={handleInputChange}
                   
                    type="text"
                    name="marital"
                    label="Marital Status"
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
                </Grid>


                {/* 3rd para start */}
                <Grid><Typography className="heading"><h4>Contact Info</h4></Typography></Grid>
                <Grid container columnSpacing={2}>
                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.phone}
                    onChange={handleInputChange}
                    type="text"
                    label="Phone Number"
                    name="phone"
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
                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.alt}
                    onChange={handleInputChange}
                    type="text"
                    name="alt"
                    label="Alternate Number"
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

                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.fatherph}
                    onChange={handleInputChange}
                    type="text"
                    name="fatherph"
                    label="Father's Phone"
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
                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.guardianph}
                    onChange={handleInputChange}
                    type="text"
                    name="gaurdianph"
                    label="Guardian's Phone"
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
                </Grid>

                {/* 4th para start */}
                <Grid><Typography className="heading"><h4>Account Details</h4></Typography></Grid>
                <Grid container columnSpacing={2}>
                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.account}
                    onChange={handleInputChange}
                    type="text"
                    name="account"
                    label="Account Number"
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

                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.ifsc}
                    onChange={handleInputChange}
                    type="text"
                    name="ifsc"
                    label="IFSC "
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
                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.bank}
                    onChange={handleInputChange}
                    type="text"
                    name="bank"
                    label="Bank Name"
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

                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.pan}
                    onChange={handleInputChange}
                    type="text"
                    name="pan"
                    label="Pan Number"
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
                <Grid item xs={4}>
                  {" "}
                  <TextField
                    required
                    value={values.aadhar}
                    onChange={handleInputChange}
                    type="text"
                    label="Aadhar Number"
                    name="aadhar"
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
              {/* 5th section */}
              <Grid><Typography className="heading"><h4>Address Details</h4></Typography></Grid>
                <Grid container columnSpacing={2}>
                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.correspondence}
                    onChange={handleInputChange}
                    type="text"
                    name="correspondence"
                    label="Correspondence Address"
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

                <Grid item xs={4}>
                  {" "}
                  <TextField required
                    value={values.permanent}
                    onChange={handleInputChange}
                    type="text"
                    name="permanent"
                    label="Permanent Address "
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

export default Dummy2;
