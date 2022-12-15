import { Module } from '@nestjs/common';
import { DtgauthService } from './dtgauth.service';
import { DtgauthController } from './dtgauth.controller';

@Module({
  controllers: [DtgauthController],
  providers: [DtgauthService]
})
export class DtgauthModule {}
