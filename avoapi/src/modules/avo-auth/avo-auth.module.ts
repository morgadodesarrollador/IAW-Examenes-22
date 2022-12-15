import { Module } from '@nestjs/common';
import { AvoAuthService } from './avo-auth.service';
import { AvoAuthController } from './avo-auth.controller';

@Module({
  controllers: [AvoAuthController],
  providers: [AvoAuthService]
})
export class AvoAuthModule {}
