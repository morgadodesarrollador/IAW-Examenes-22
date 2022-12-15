import { Module } from '@nestjs/common';
import { PbfauthService } from './pbfauth.service';
import { PbfauthController } from './pbfauth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PbfUsuario } from './entities/PbfUsuario.entity';

@Module({
  controllers: [PbfauthController],
  providers: [PbfauthService],
  imports: [
    TypeOrmModule.forFeature([ PbfUsuario ]),
    
  ],
  exports: [TypeOrmModule, PbfauthService]

})
export class PbfauthModule {}
