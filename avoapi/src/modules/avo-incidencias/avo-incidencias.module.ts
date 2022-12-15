import { Module } from '@nestjs/common';
import { AvoIncidenciasService } from './avo-incidencias.service';
import { AvoIncidenciasController } from './avo-incidencias.controller';

@Module({
  controllers: [AvoIncidenciasController],
  providers: [AvoIncidenciasService]
})
export class AvoIncidenciasModule {}
