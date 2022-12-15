import { Test, TestingModule } from '@nestjs/testing';
import { DtgaparatoController } from './dtgaparato.controller';
import { DtgaparatoService } from './dtgaparato.service';

describe('DtgaparatoController', () => {
  let controller: DtgaparatoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DtgaparatoController],
      providers: [DtgaparatoService],
    }).compile();

    controller = module.get<DtgaparatoController>(DtgaparatoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
