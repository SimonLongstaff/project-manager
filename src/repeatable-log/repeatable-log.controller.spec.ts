import { Test, TestingModule } from '@nestjs/testing';
import { RepeatableLogController } from './repeatable-log.controller';

describe('RepeatableLogController', () => {
  let controller: RepeatableLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepeatableLogController],
    }).compile();

    controller = module.get<RepeatableLogController>(RepeatableLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
