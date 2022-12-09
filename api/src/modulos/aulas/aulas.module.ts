import { Module } from '@nestjs/common';
import { AulasService } from './aulas.service';
import { AulasController } from './aulas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aula } from './entities/aula.entity';

@Module({
  controllers: [AulasController],
  providers: [AulasService],
  imports: [
    TypeOrmModule.forFeature( [ Aula ])
  ],
  exports: [ AulasService ]
})
export class AulasModule {}
