import { Module } from '@nestjs/common';
import { JlpIncicenciasService } from './jlp-incicencias.service';
import { JlpIncicenciasController } from './jlp-incicencias.controller';

@Module({
  controllers: [JlpIncicenciasController],
  providers: [JlpIncicenciasService]
})
export class JlpIncicenciasModule {}
