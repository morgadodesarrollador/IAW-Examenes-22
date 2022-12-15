import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DtgincidenciaModule } from './modulos/dtgincidencia/dtgincidencia.module';
import { DtgaparatoModule } from './modulos/dtgaparato/dtgaparato.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DtgauthModule } from './modulos/dtgauth/dtgauth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize:true
    }),
    DtgincidenciaModule,
    DtgaparatoModule,
    DtgauthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
