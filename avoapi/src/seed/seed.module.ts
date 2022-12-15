import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { AvoAparato } from 'src/modules/avo-aparatos/entities/avo-aparato.entity';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [AvoAparato]
})
export class SeedModule {}
