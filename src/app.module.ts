import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JambAparato } from './modules/jamb-aparatos/entities/jamb-aparato.entity';
import { JambAuthModule } from './modules/jamb-auth/jamb-auth.module';
import { JambIncidencia } from './modules/jamb-incidencias/entities/jamb-incidencia.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true
    }),
    JambAuthModule,
    JambAparato,
    JambIncidencia
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
