import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm.css';
import TextField from '@mui/material/TextField';
import {Button, Switch, Grid } from '@mui/material';

const Employee = () => {
  const[open,setOpen]=useState(false)
    const label = { inputProps: { "aria-label": "Switch demo" } };
    // const [name, setName] = useState(""); 
    const handleSwitch=()=>{
     setOpen(!open)
    }
    // const VisuallyHiddenInput = styled('input')({
    //     clip: 'rect(0 0 0 0)',
    //     clipPath: 'inset(50%)',
    //     height: 1,
    //     overflow: 'hidden',
    //     position: 'absolute',
    //     bottom: 0,
    //     left: 0,
    //     whiteSpace: 'nowrap',
    //     width: 1,
    //   });

  return (
    <div className='parent' >
       <div style={{backgroundColor:'aliceblue'}}>
        <h1 style={{textAlign:'center'}}> Employee Form </h1>
       </div>
       
       <div className='parent1' >
      
        <div className='child1'>
       <Grid> <Button>{open?"banned":"active"}</Button> </Grid>

            <div > 
                <button className='btn' >Upload Photo</button>
                {/* <Button className='btn' component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button> */}
                <div><h6 style={{color:'black',textAlign:'center'}}>Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB</h6></div>

            </div>
            <div className='toggle-btn'>
               <div className='flex'> <h2>Banned</h2> 
                <p>Apply disable account</p></div>
                <div><Switch {...label} defaultChecked  onClick={handleSwitch}/></div>
            </div>
            <div className='toggle-btn'>
               <div><h2>Email Verified</h2>
               <p>Disabling this will automatically send the user a verification email</p></div>
               
                <div><Switch {...label} defaultChecked /></div>
            </div>
            <div ><button className='delbtn'>Delete User</button></div>

        </div>
        <div className='child2' >
        <form className='subChild'>
            <div >
         <TextField
          id="outlined-helperText"
          label="FullName"
          default="Default Value"
          helperText="Enter Your Name"
        />

<TextField 
        id='outline-required'
        label='required'
        placeholder='FullName'
        variant='outlined'
        />

<TextField 
        id='outline-required'
        label='required'
        placeholder='FullName'
        variant='outlined'
        />
      <TextField 
        id='outline-required'
        label='required'
        placeholder='FullName'
        variant='outlined'
    />
      <TextField 
        id='outline-required'
        label='required'
        placeholder='FullName'
        variant='outlined'
        />
        </div>
        <div className='subChild'>
          
        <TextField 
        id='outline-required'
        label='required'
        placeholder='FullName'
        variant='outlined'
        />
    
        <TextField 
        id='outline-required'
        label='required'
        placeholder='Password'
        variant='outlined'
    />
  
      <TextField 
        id='outline-required'
        label='required'
        placeholder='FullName'
        variant='outlined'
        />
      <TextField 
        id='outline-required'
        label='required'
        placeholder='FullName'
        variant='outlined'
        />
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
         </div>
         <div><button className='savebtn'>Save Changes</button></div>
         </form>
         </div>
        
       </div>
    </div>
  )
}

export default Employee
