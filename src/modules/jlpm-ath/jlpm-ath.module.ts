import { Module } from '@nestjs/common';
import { JlpmAthService } from './jlpm-ath.service';
import { JlpmAthController } from './jlpm-ath.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/jlpm-Usuario.entity';

@Module({
  controllers: [JlpmAthController],
  providers: [JlpmAthService],
  imports: [
    TypeOrmModule.forFeature([ Usuario ])
  ],
  exports: [ JlpmAthService ]
})
export class JlpmAthModule {}
