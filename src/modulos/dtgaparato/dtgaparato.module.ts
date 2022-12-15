import { Module } from '@nestjs/common';
import { DtgaparatoService } from './dtgaparato.service';
import { DtgaparatoController } from './dtgaparato.controller';

@Module({
  controllers: [DtgaparatoController],
  providers: [DtgaparatoService]
})
export class DtgaparatoModule {}
