import { Module } from '@nestjs/common';
import { MjmgaparatosService } from './mjmgaparatos.service';
import { MjmgaparatosController } from './mjmgaparatos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MJMGaparato } from './entities/mjmgaparato.entity';

@Module({
  controllers: [MjmgaparatosController],
  providers: [MjmgaparatosService],
  imports:[
    TypeOrmModule.forFeature([MJMGaparato])
  ]
})
export class MjmgaparatosModule {}
