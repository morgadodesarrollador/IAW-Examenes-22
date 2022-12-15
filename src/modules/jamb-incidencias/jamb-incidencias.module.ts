import { Module } from '@nestjs/common';
import { JambIncidenciasService } from './jamb-incidencias.service';
import { JambIncidenciasController } from './jamb-incidencias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JambIncidencia } from './entities/jamb-incidencia.entity';

@Module({
  controllers: [JambIncidenciasController],
  providers: [JambIncidenciasService],
  imports: [
    TypeOrmModule.forFeature([ JambIncidencia ])
  ],
  exports: [JambIncidenciasService]
})
export class JambIncidenciasModule {}
