import { Module } from '@nestjs/common';
import { TipoMaterialService } from './tipo-material.service';
import { TipoMaterialController } from './tipo-material.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoMaterial } from './entities/tipo-material.entity';

@Module({
  controllers: [TipoMaterialController],
  providers: [TipoMaterialService],
  imports: [
    TypeOrmModule.forFeature( [ TipoMaterial])
  ],
  exports: [TipoMaterialService]
})
export class TipoMaterialModule {}
