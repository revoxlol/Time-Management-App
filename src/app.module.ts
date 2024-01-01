import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GoogleService } from './services/google/google.service';
import { AppController } from './controllers/app/app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GoogleService],
})
export class AppModule {}
