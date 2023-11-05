import React from 'react'
import '../App.css';
import { Button } from '@mui/material';

function Location1({ location, error, loading, onClear }) {
    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
  if (location ){
    return (
        <div>
        <center> <h1>Country: {location.country},{location["country abbreviation"]}</h1>
        </center>
    <div className='location-container'>
        
        {location.places.map((place,index)=>(
        <div className='location_details' key={index}><h2>Place:{index+1}</h2>
        <p>State: {place.state}</p>
        <p>State abbrevation:{place["state abbreviation"]}</p>
        <p>Name:{place["place name"]}</p>
        <p>Latitude:{place.latitude}</p>
        <p>Longitude:{place.longitude}</p>
        
      </div>
      ))}
       
    </div><br/><br/>
    <center> <Button className='clear' variant='outlined' onClick={onClear}>Clear</Button></center><br/><br/><br/>
    </div>
  )
}
return null;
}

export default Location1