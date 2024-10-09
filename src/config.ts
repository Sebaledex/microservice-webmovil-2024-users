import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    rabbitMQ: {
      amqpUrl: process.env.AMQP_URL,
    },
    mongo: {
      uri: process.env.URI_MONGODB,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    },
  };
});
