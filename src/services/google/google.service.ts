import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GoogleService {
  async calculateDepartureTime(location: string, destination: string, modeOfTravel: string, arrivalTime: string)
  : Promise<string> {
    const response = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
      params: {
        origins: location,
        destinations: destination,
        mode: modeOfTravel,
        arrival_time: arrivalTime,
        key: 'YOUR_API_KEY',
      },
    });

   
    if (response.data && response.data.rows && response.data.rows[0].elements
       && response.data.rows[0].elements[0].duration_in_traffic) {
    return response.data.rows[0].elements[0].duration_in_traffic.text;
         } else {
    
    throw new Error('Could not calculate departure time');

}
  
  }
}
