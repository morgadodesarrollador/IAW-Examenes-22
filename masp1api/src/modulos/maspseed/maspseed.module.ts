import { Module } from '@nestjs/common';
import { SeedService } from './maspseed.service';
import { SeedController } from './maspseed.controller';

@Module({
  controllers: [SeedController],
  providers: [SeedService]
})
export class SeedModule {}
