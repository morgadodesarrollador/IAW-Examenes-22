import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JlpmAparatosModule } from './modules/jlp-aparatos/jlp-aparatos.module';
import { JlpIncicenciasModule } from './modules/jlp-incicencias/jlp-incicencias.module';
import { JlpmAthModule } from './modules/jlpm-ath/jlpm-ath.module';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: !!process.env.DB_SYNC
    }), 
    JlpmAthModule,JlpmAparatosModule,JlpIncicenciasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
