import { Test, TestingModule } from '@nestjs/testing';
import { NestUtilities } from './nest-utilities-provider';

describe('NestUtilities', () => {
  let provider: NestUtilities;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestUtilities],
    }).compile();

    provider = module.get<NestUtilities>(NestUtilities);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
