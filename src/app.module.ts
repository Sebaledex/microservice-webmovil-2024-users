import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import * as Joi from 'joi';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        URI_MONGODB: Joi.string().required(),
        AMQP_URL: Joi.string().required(),
      }),
    }),
    MongooseModule.forRoot(process.env.URI_MONGODB),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
