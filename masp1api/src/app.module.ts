import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaspAuthModule } from './modulos/masp-auth/masp-auth.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type: 'postgres',
    host: "192.168.16.129",
    port: 5435,
    username: "miguel",
    password: "usuario",
    database: "maspIncidencias",
    autoLoadEntities: true,
    synchronize: !!"true"
  }), MaspAuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
