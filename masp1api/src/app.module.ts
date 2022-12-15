import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaspAuthModule } from './modulos/maspauth/maspauth.module';
// import { SeedModule } from './modulos/maspseed/maspseed.module';
import { MaspincidenciasModule } from './modulos/maspincidencias/maspincidencias.module';
import { MaspaparatosModule } from './modulos/maspaparatos/maspaparatos.module';

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
  }), MaspAuthModule, MaspincidenciasModule, MaspaparatosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
