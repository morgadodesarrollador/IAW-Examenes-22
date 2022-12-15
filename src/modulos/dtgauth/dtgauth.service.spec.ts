import { Test, TestingModule } from '@nestjs/testing';
import { DtgauthService } from './dtgauth.service';

describe('DtgauthService', () => {
  let service: DtgauthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DtgauthService],
    }).compile();

    service = module.get<DtgauthService>(DtgauthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
