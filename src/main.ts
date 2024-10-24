import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { RabbitMQ } from './common/constants';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.LOCAL_AMQP_URL],
      queue: RabbitMQ.UserQueue,
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      disableErrorMessages: process.env.ENVIRONMENT === 'production',
    }),
  );
  // app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.listen();
  console.log('Microservice Users is listening');
}
bootstrap();
