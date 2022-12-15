import { Module } from '@nestjs/common';
import { MaspincidenciasService } from './maspincidencias.service';
import { MaspincidenciasController } from './maspincidencias.controller';
import { Incidencia } from './entities/maspincidencia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaspaparatosModule } from '../maspaparatos/maspaparatos.module';

@Module({
  controllers: [MaspincidenciasController],
  providers: [MaspincidenciasService],
  imports: [
    MaspaparatosModule,
    TypeOrmModule.forFeature([ Incidencia ])
  ]
})
export class MaspincidenciasModule {}
