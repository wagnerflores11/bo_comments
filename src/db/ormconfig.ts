import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

const source = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5435,
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_DATABASE'),
  entities: ['src/**/entities/*.entity.ts'],
  synchronize: false, //tudo o que estiver dentro da models vai pro db
  migrations: ['src/db/migrations/*.ts'],
});

export default source;
