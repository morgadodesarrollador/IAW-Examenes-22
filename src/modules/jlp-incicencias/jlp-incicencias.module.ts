import { Module } from '@nestjs/common';
import { JlpIncidenciasService } from './jlp-incicencias.service';
import { JlpIncicenciasController } from './jlp-incicencias.controller';
import { Incicencia } from './entities/jlp-incicencia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JlpmAparatosModule } from '../jlp-aparatos/jlp-aparatos.module';
import { JlpmAthModule } from '../jlpm-ath/jlpm-ath.module';

@Module({
  controllers: [JlpIncicenciasController],
  providers: [JlpIncidenciasService],
  imports: [
    JlpmAparatosModule,JlpmAthModule,
    TypeOrmModule.forFeature([ Incicencia ])
  ]
})
export class JlpIncicenciasModule {}
