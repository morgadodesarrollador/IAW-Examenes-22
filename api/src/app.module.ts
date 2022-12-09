import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ProfesorModule, AulasModule, AlumnosModule, MaterialModule, DepartamentosModule, 
  TipoMaterialModule, IncidenciaModule, CierreIncidenciaModule, AuthModule } from './modulos/index';

@Module({
  controllers: [],
  providers: [],
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
    ProfesorModule,
    AulasModule,
    AlumnosModule,
    MaterialModule,
    DepartamentosModule,
    TipoMaterialModule,
    IncidenciaModule,
    CierreIncidenciaModule,
    AuthModule,
  ]
})
export class AppModule {}
