import { Module } from '@nestjs/common';
import { JlpAparatosService } from './jlp-aparatos.service';
import { JlpAparatosController } from './jlp-aparatos.controller';
import { Aparato } from './entities/jlp-aparato.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [JlpAparatosController],
  providers: [JlpAparatosService],
  imports: [
    TypeOrmModule.forFeature([ Aparato ])
  ],
  exports: [ JlpAparatosService ]
})
export class JlpmAparatosModule {}
