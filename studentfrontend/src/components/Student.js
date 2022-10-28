// import * as React from 'react';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper, Button } from '@mui/material';

export default function Student() {
    const paperStyle={padding:'50px 20px', width:600, margin:"20px auto"}
    const[name,setName]=useState('')
    const[address,setAddress]=useState('');

    const handleClick=(e)=>{
        e.preventDefault()
        const student={name,address}
        console.log(student)
        fetch("http://localhost:8080/student/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
        
    }).then(()=>{
        console.log("New Student Added!")
    })
}
  
    return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add Student Here</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>
        Submit
      </Button>
    </Box>
    </Paper>
    </Container>
  );
}
