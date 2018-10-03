import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { UserNotFoundError } from './UserNotFoundError';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    throw new UserNotFoundError();
  }
}
