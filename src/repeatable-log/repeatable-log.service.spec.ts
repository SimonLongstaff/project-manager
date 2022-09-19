import { Test, TestingModule } from '@nestjs/testing';
import { RepeatableLogService } from './repeatable-log.service';

describe('RepeatableLogService', () => {
  let service: RepeatableLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepeatableLogService],
    }).compile();

    service = module.get<RepeatableLogService>(RepeatableLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
