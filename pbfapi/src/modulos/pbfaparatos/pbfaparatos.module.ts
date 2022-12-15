import { Module } from '@nestjs/common';
import { PbfaparatosService } from './pbfaparatos.service';
import { PbfaparatosController } from './pbfaparatos.controller';

@Module({
  controllers: [PbfaparatosController],
  providers: [PbfaparatosService]
})
export class PbfaparatosModule {}
