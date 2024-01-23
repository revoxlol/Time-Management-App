import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Container from '@mui/material/Container';
import axios from 'axios';



const TimeManagementApp = () => {
  const [startLocation, setStartLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [modeOfTravel, setModeOfTravel] = useState('driving');
  const [arrivalTime, setArrivalTime] = useState('');
  const [departureTime, setDepartureTime] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/app/calculate-departure-time', {
        location: startLocation,
        destination,
        modeOfTravel,
        arrivalTime,
      });

      setDepartureTime(response.data);
      setError(null);
    } catch (error) {
      if (error.response) {
        setError(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        setError('No response received from the server');
      } else {
        setError(`Error: ${error.message}`);
      }
      setDepartureTime(null);
    }
  };
  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <div>
        <h1>Time Management App</h1>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Start Location"
              value={startLocation}
              onChange={(e) => setStartLocation(e.target.value)}
              required
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <TextField
              label="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Mode of Travel</InputLabel>
            <Select
            label="Mode Of Travel"
              value={modeOfTravel}
              onChange={(e) => setModeOfTravel(e.target.value)}
            >
              <MenuItem value="driving">Car</MenuItem>
              <MenuItem value="transit">Train</MenuItem>
              <MenuItem value="walking">Walking</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <TextField
              label="Desired Arrival Time"
              type="time"
              value={arrivalTime}
              onChange={(e) => setArrivalTime(e.target.value)}
              required
              InputLabelProps={{ shrink: true }}
              inputProps={{ style: { textAlign: 'center' }, placeholder: '' }}
            />
          </FormControl>

          <Button variant="contained" color="primary" type="submit">
            Calculate Departure Time
          </Button>
          {departureTime && (
            <p>Estimated Departure Time: {departureTime}</p>
          )}

          {error && (
            <p style={{ color: 'red' }}>{error}</p>
          )}
        </form>
      </div>
    </Container>
  );
};

export default TimeManagementApp;
