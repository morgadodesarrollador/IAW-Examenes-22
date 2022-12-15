import { Module } from '@nestjs/common';
import { JambAparatosService } from './jamb-aparatos.service';
import { JambAparatosController } from './jamb-aparatos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [JambAparatosController],
  providers: [JambAparatosService],
  imports: [
    TypeOrmModule.forFeature([ JambAparatosController ])
  ],
})
export class JambAparatosModule {}
