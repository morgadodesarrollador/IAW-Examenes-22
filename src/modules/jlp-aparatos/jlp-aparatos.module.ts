import { Module } from '@nestjs/common';
import { JlpAparatosService } from './jlp-aparatos.service';
import { JlpAparatosController } from './jlp-aparatos.controller';

@Module({
  controllers: [JlpAparatosController],
  providers: [JlpAparatosService]
})
export class JlpAparatosModule {}
