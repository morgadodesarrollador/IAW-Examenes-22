import { Module } from '@nestjs/common';
import { JmvpIncidenciasService } from './jmvp-incidencias.service';
import { JmvpIncidenciasController } from './jmvp-incidencias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JmvpIncidencia } from './entities/jmvp-incidencia.entity';

@Module({
  controllers: [JmvpIncidenciasController],
  providers: [JmvpIncidenciasService],
  imports: [
    TypeOrmModule.forFeature([JmvpIncidencia])
  ],
  exports: [
    JmvpIncidenciasService,
    TypeOrmModule
  ]
})
export class JmvpIncidenciasModule {}
