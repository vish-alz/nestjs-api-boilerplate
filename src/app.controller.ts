import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { AuthGuard } from './users/login/decorators/auth-guard.decorator';
import { AuthType } from './users/login/enums/auth-type.enum';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @AuthGuard(AuthType.None)
  @Get()
  getHello(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(this.appService.getHello());
  }

  @AuthGuard(AuthType.Bearer)
  @Get('secure')
  getProtectedResource(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(this.appService.getSecureResource());
  }
}
