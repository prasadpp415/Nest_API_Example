import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
   @Header('Content-Type','application/xml')
  getHi() {
    return 'Hi, Good morning to you all !!!'
  }
}
