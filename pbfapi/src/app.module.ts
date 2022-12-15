import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PbfauthModule } from './modulos/pbfauth/pbfauth.module';
import { PbfincidenciasModule } from './modulos/pbfincidencias/pbfincidencias.module';
import { PbfaparatosModule } from './modulos/pbfaparatos/pbfaparatos.module';
// import { SeedModule } from './modulos/seed/seed.module';



@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize:true
    }),
    PbfauthModule,
    PbfincidenciasModule,
    PbfaparatosModule,
    // SeedModule,

    
  ]
})
export class AppModule {}
