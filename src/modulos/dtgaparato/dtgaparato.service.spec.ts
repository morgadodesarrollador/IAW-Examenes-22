import { Test, TestingModule } from '@nestjs/testing';
import { DtgaparatoService } from './dtgaparato.service';

describe('DtgaparatoService', () => {
  let service: DtgaparatoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DtgaparatoService],
    }).compile();

    service = module.get<DtgaparatoService>(DtgaparatoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
