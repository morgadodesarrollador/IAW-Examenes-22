import { Module } from '@nestjs/common';
import { JambIncidenciasService } from './jamb-incidencias.service';
import { JambIncidenciasController } from './jamb-incidencias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [JambIncidenciasController],
  providers: [JambIncidenciasService],
  imports: [
    TypeOrmModule.forFeature([ JambIncidenciasController ])
  ],
})
export class JambIncidenciasModule {}
