import { Module } from '@nestjs/common';
import { JambAparatosService } from './jamb-aparatos.service';
import { JambAparatosController } from './jamb-aparatos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JambAparato } from './entities/jamb-aparato.entity';

@Module({
  controllers: [JambAparatosController],
  providers: [JambAparatosService],
  imports: [
    TypeOrmModule.forFeature([ JambAparato ])
  ],
  exports: [JambAparatosService]
})
export class JambAparatosModule {}
