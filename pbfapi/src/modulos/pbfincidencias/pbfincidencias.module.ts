import { Module } from '@nestjs/common';
import { PbfincidenciasService } from './pbfincidencias.service';
import { PbfincidenciasController } from './pbfincidencias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pbfincidencia } from './entities/pbfincidencia.entity';

@Module({
  controllers: [PbfincidenciasController],
  providers: [PbfincidenciasService],
  imports: [
    TypeOrmModule.forFeature([ Pbfincidencia ]),
    
  ],
  exports: [TypeOrmModule, PbfincidenciasService]
})
export class PbfincidenciasModule {}
