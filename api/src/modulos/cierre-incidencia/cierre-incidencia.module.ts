import { Module } from '@nestjs/common';
import { CierreIncidenciaService } from './cierre-incidencia.service';
import { CierreIncidenciaController } from './cierre-incidencia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CierreIncidencia } from './entities/cierre-incidencia.entity';

@Module({
  controllers: [CierreIncidenciaController],
  providers: [CierreIncidenciaService],
  imports: [
    TypeOrmModule.forFeature( [ CierreIncidencia ])
  ],
  exports: [ CierreIncidenciaService ]
})
export class CierreIncidenciaModule {}
