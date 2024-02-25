import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './models/users.model';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MailerModule } from '../common/mailer/mailer.module';
import { BcryptService } from '../common/hashing/bcrypt.service';
import { HashingService } from '../common/hashing/hashing.service';
import { provideUsersRepository } from './repositories/users.repository.provider';
import { JwtService } from '@nestjs/jwt';
import { UtilsModule } from '../common/utils/utils.module';
import { ChangePasswordModule } from './change-password/change-password.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    MailerModule,
    LoginModule,
    RegisterModule,

    ForgotPasswordModule,
    ChangePasswordModule,
    UtilsModule,
  ],
  controllers: [UsersController],
  providers: [
    JwtService,
    {
      provide: HashingService,
      useClass: BcryptService,
    },
    UsersService,
    ...provideUsersRepository(),
  ],
})
export class UsersModule {}
