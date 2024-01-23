import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Container from '@mui/material/Container';

const TimeManagementApp = () => {
  const [startLocation, setStartLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [modeOfTravel, setModeOfTravel] = useState('driving');
  const [arrivalTime, setArrivalTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
   
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
        </form>
      </div>
    </Container>
  );
};

export default TimeManagementApp;
