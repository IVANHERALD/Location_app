import React,{useState} from 'react'
import Home from './component/Home'
import Location1 from './component/Location1'
import '../src/App.css';
function App() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleZipCodeSubmit = (zipCode) => {
    
    const apiUrl = `https://api.zippopotam.us/in/${zipCode}`;
    setLocation(null);
    setError(null);
    setLoading(true);

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setLocation(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
    };

    const handleClear = () => {
      setLocation(null);
      setError(null);
    };
  return (
    <div>
<h1 className='header'><br/>Zip Code Information App</h1>
      <Home onZipCodeSubmit={handleZipCodeSubmit} />
      <Location1
        location={location}
        error={error}
        loading={loading}
        onClear={handleClear}
      />
    </div>
  )
}

export default App