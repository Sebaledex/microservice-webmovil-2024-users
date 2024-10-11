import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    rabbitMQ: {
      amqpUrl: process.env.AMQP_URL,
    },
    mongo: {
      dbName: process.env.MONGO_DB,
      user: process.env.MONGO_INITDB_ROOT_USERNAME,
      password: process.env.MONGO_INITDB_ROOT_PASSWORD,
      port: parseInt(process.env.MONGO_PORT, 10),
      host: process.env.MONGO_HOST,
      connection: process.env.MONGO_CONNECTION,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    },
  };
});
