import { UseFilters, Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './http-exception.filter';
import { UserNotFoundError } from './UserNotFoundError';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseFilters(HttpExceptionFilter)
  root(): string {
    throw new UserNotFoundError();
  }
}
