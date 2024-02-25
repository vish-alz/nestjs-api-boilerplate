import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../../src/app.module';
import { MailerService } from '../../src/common/mailer/mailer.service';
import {
  BadRequestException,
  HttpStatus,
  INestApplication,
  ValidationPipe,
} from '@nestjs/common';
import { ForgotPasswordDto } from 'src/users/forgot-password/dto/forgot-password.dto';
import { UserDto } from '../../src/users/dto/user.dto';

const user = {
  email: 'test@example.com',
};

const createUser = {
  name: 'name #1',
  username: 'username #1',
  email: 'test@example.com',
  password: 'pass123',
};

describe('App (e2e)', () => {
  let app: INestApplication<any>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(MailerService)
      .useValue({
        sendMail: jest.fn(() => true),
      })
      .compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    );

    await app.init();
  });

  describe('ForgotPassowrdController (e2e) - [POST /api/auth/forgot-password]', () => {
    it('should create user', async () => {
      return await request(app.getHttpServer())
        .post('/api/auth/register')
        .send(createUser as UserDto)
        .then(({ body }) => {
          expect(body).toEqual({
            message: 'User registration successfully!',
            status: 201,
          });
          expect(HttpStatus.CREATED);
        });
    });

    it('should generate a new password per user if they have forgotten their password.', () => {
      return request(app.getHttpServer())
        .post('/api/auth/forgot-password')
        .send(user as ForgotPasswordDto)
        .then(({ body }) => {
          expect(body).toEqual({
            message: 'Request Reset Password Successfully!',
            status: 200,
          });
        });
    });
  });

  it('should throw an error for a bad email', () => {
    return request(app.getHttpServer())
      .post('/api/auth/forgot-password')
      .send({
        email: 'not correct',
      })
      .then(({ body }) => {
        expect(body).toEqual({
          error: 'Bad Request',
          message: ['email must be an email'],
          statusCode: 400,
        });
        expect(HttpStatus.BAD_REQUEST);
        expect(new BadRequestException());
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
