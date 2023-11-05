import React,{useState} from 'react'
import {TextField,Button} from '@mui/material'

function Home({onZipCodeSubmit}) {
    const [zipCode, setZipCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onZipCodeSubmit(zipCode);
  };
  return (
    <div>
<center>
      <TextField
        type="text"
        placeholder="Enter a postal code"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
      <br/><br/>
      <Button variant='outlined' onClick={handleSubmit}>GET DETAILS</Button>
      </center>
    </div>
  )
}

export default Home