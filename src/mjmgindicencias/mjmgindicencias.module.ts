import { Module } from '@nestjs/common';
import { MjmgindicenciasService } from './mjmgindicencias.service';
import { MjmgindicenciasController } from './mjmgindicencias.controller';

@Module({
  controllers: [MjmgindicenciasController],
  providers: [MjmgindicenciasService]
})
export class MjmgindicenciasModule {}
