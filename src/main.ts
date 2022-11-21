import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { EntityNotFoundExceptionFilter } from './filters/entity-not-found.exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /*
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: process.env.KAFKA_CLIENT_ID,
        brokers: [process.env.KAFKA_BROKER],
        // brokers: [
        //   'b-2.bomskcluster.rq263z.c5.kafka.eu-central-1.amazonaws.com:9094',
        //   'b-1.bomskcluster.rq263z.c5.kafka.eu-central-1.amazonaws.com:9094',
        // ],
        // sasl: {
        //   mechanism: 'aws',
        // },
      },
      consumer: {
        groupId:
          !process.env.KAFKA_CONSUMER_GROUP_ID ||
          process.env.KAFKA_CONSUMER_GROUP_ID === ''
            ? process.env.APP_NAME + Math.random()
            : process.env.KAFKA_CONSUMER_GROUP_ID,
      },
    },
  });

  await app.startAllMicroservicesAsync();
  */

  app.useGlobalFilters(new EntityNotFoundExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }));

  await app.listen(3000);
}

bootstrap();
