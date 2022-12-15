import { Test, TestingModule } from '@nestjs/testing';
import { DtgincidenciaController } from './dtgincidencia.controller';
import { DtgincidenciaService } from './dtgincidencia.service';

describe('DtgincidenciaController', () => {
  let controller: DtgincidenciaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DtgincidenciaController],
      providers: [DtgincidenciaService],
    }).compile();

    controller = module.get<DtgincidenciaController>(DtgincidenciaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
