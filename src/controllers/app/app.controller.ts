import { Controller, Post, Body } from '@nestjs/common';
import { GoogleService } from '../../services/google/google.service'

@Controller('app')
export class AppController {
  constructor(private googleService: GoogleService) {}

  @Post('/calculate-departure-time')
  async calculateDepartureTime(@Body() body: { location: string, destination: string, modeOfTravel: string, arrivalTime: string }): Promise<string> {
    return this.googleService.calculateDepartureTime(body.location, body.destination, body.modeOfTravel, body.arrivalTime);
  }
}