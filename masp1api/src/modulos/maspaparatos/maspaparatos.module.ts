import { Module } from '@nestjs/common';
import { MaspaparatosService } from './maspaparatos.service';
import { MaspaparatosController } from './maspaparatos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aparato } from './entities/maspaparato.entity';

@Module({
  controllers: [MaspaparatosController],
  providers: [MaspaparatosService],
  imports: [
    TypeOrmModule.forFeature([ Aparato ])
  ],
  exports: [MaspaparatosService]
})
export class MaspaparatosModule {}
