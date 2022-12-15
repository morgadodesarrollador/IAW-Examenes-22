import { Module } from '@nestjs/common';
import { JambAuthService } from './jamb-auth.service';
import { JambAuthController } from './jamb-auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JambUsuario } from './entities/jamb-Usuario.entity';

@Module({
  controllers: [JambAuthController],
  providers: [JambAuthService],
  imports: [
    TypeOrmModule.forFeature( [JambUsuario] ),
  ],
  exports: [JambAuthService]
})
export class JambAuthModule {}
