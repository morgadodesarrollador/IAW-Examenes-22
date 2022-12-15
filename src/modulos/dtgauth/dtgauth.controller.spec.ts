import { Test, TestingModule } from '@nestjs/testing';
import { DtgauthController } from './dtgauth.controller';
import { DtgauthService } from './dtgauth.service';

describe('DtgauthController', () => {
  let controller: DtgauthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DtgauthController],
      providers: [DtgauthService],
    }).compile();

    controller = module.get<DtgauthController>(DtgauthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
