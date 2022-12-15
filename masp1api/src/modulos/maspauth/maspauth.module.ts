import { Module } from '@nestjs/common';
import { MaspAuthService } from './maspauth.service';
import { MaspAuthController } from './maspauth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/maspUsuario.entity';

@Module({
  controllers: [MaspAuthController],
  providers: [MaspAuthService],
  imports: [
    TypeOrmModule.forFeature([ Usuario ])
  ]
})
export class MaspAuthModule {}
