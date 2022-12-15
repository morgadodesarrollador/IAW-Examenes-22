import { Test, TestingModule } from '@nestjs/testing';
import { DtgincidenciaService } from './dtgincidencia.service';

describe('DtgincidenciaService', () => {
  let service: DtgincidenciaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DtgincidenciaService],
    }).compile();

    service = module.get<DtgincidenciaService>(DtgincidenciaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
