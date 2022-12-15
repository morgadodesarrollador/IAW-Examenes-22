import { Module } from '@nestjs/common';
import { JlpmAthService } from './jlpm-ath.service';
import { JlpmAthController } from './jlpm-ath.controller';

@Module({
  controllers: [JlpmAthController],
  providers: [JlpmAthService]
})
export class JlpmAthModule {}
