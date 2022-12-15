import { Module } from '@nestjs/common';
import { AvoAparatosService } from './avo-aparatos.service';
import { AvoAparatosController } from './avo-aparatos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvoAparato } from './entities/avo-aparato.entity';

@Module({
  controllers: [AvoAparatosController],
  providers: [AvoAparatosService],
  imports: [TypeOrmModule.forFeature([AvoAparato])],
})
export class AvoAparatosModule {}
