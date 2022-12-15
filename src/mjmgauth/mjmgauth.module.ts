import { Module } from '@nestjs/common';
import { MjmgauthService } from './mjmgauth.service';
import { MjmgauthController } from './mjmgauth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MJMGUsuario } from './entities/MJMGUsuario.entity';

@Module({
  controllers: [MjmgauthController],
  providers: [MjmgauthService],
  imports:[
    TypeOrmModule.forFeature([MJMGUsuario])
  ]
})
export class MjmgauthModule {}
