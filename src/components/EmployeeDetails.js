import React from 'react';
import {Box, Grid, TextField} from '@mui/material';


const EmployeeDetails = () => {
  
  return (
    <div style={{backgroundColor:'aliceblue', height:'100vh', width:'100%'}}>
        <h1 style={{textAlign:'center'}}> Employee Details </h1>
       <Box display={'flex'} alignItems={'center'} margin={'2'} padding={'2'} >
        <Grid container spacing={2}>
            <Grid item xs={12} spacing={2}>
                image upload
            </Grid>
            <Grid item xs={12}> toggle button</Grid>
                   
       </Grid>
       <Grid container spacing={2} m={2} padding={2}>
       <Grid spacing={2}> 
        Employee Information
           <TextField 
           required
           id='outline-required'
           label='Required'
           placeholder='FullName'
           variant='filled'/> </Grid>
           <Grid> 
            <TextField 
           required
           id='outline-required'
           label='Required'
           type='tel'
           placeholder='phone'
           variant='filled'/>


           </Grid>
           <Grid> 
            <TextField 
           required
           id='outline-required'
           label='Required'
           type='State/Region'
           placeholder='State/Region'
           variant='filled'/>
           

           </Grid>
           <Grid> 
            <TextField 
           required
           id='outline-required'
           label='Required'
           type='Address'
           placeholder='Address'
           variant='filled'/>
           

           </Grid>
           <Grid> 
            <TextField 
           required
           id='outline-required'
           label='Required'
           type='Company'
           placeholder='company'
           variant='filled'/>
           

           </Grid>
           <Grid> 
            <TextField 
           required
           id='outline-required'
           label='Required'
           type='Country'
           placeholder='Country'
           variant='filled'/>
           

           </Grid>
           <Grid> 
            <TextField 
           required
           id='outline-required'
           label='Required'
           type='City'
           placeholder='City'
           variant='filled'/>
           

           </Grid>
           <Grid> 
            <TextField 
           required
           id='outline-required'
           label='Required'
           type='Zip/Code'
           placeholder='Zip/Code'
           variant='filled'/>
           

           </Grid>
           <Grid> 
            <TextField 
           required
           id='outline-required'
           label='Required'
           type='Role'
           placeholder='Role'
           variant='filled'/>
           

           </Grid>


           </Grid>
    </Box>  

      
    </div>
  )
}

export default EmployeeDetails
