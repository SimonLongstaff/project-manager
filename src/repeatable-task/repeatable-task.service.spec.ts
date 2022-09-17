import { Test, TestingModule } from '@nestjs/testing';
import { RepeatableTaskService } from './repeatable-task.service';

describe('RepeatableTaskService', () => {
  let service: RepeatableTaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepeatableTaskService],
    }).compile();

    service = module.get<RepeatableTaskService>(RepeatableTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
