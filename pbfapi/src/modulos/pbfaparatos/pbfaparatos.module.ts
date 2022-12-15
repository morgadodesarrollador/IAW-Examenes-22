import { Module } from '@nestjs/common';
import { PbfaparatosService } from './pbfaparatos.service';
import { PbfaparatosController } from './pbfaparatos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pbfaparato } from './entities/pbfaparato.entity';

@Module({
  controllers: [PbfaparatosController],
  providers: [PbfaparatosService],
  imports: [
    TypeOrmModule.forFeature([ Pbfaparato ]),
    
  ],
  exports: [TypeOrmModule, PbfaparatosService]
})
export class PbfaparatosModule {}
