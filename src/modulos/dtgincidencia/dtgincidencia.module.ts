import { Module } from '@nestjs/common';
import { DtgincidenciaService } from './dtgincidencia.service';
import { DtgincidenciaController } from './dtgincidencia.controller';

@Module({
  controllers: [DtgincidenciaController],
  providers: [DtgincidenciaService]
})
export class DtgincidenciaModule {}
