import { Module } from '@nestjs/common';
import { MaspAuthService } from './masp-auth.service';
import { MaspAuthController } from './masp-auth.controller';

@Module({
  controllers: [MaspAuthController],
  providers: [MaspAuthService]
})
export class MaspAuthModule {}
