import { Module } from '@nestjs/common';
import { IncidenciasService } from './incidencias.service';
import { IncidenciasController } from './incidencias.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Incidencia } from './entities/incidencia.entity';

@Module({
  controllers: [IncidenciasController],
  providers: [IncidenciasService],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Incidencia])
  ]
})
export class IncidenciasModule {}
