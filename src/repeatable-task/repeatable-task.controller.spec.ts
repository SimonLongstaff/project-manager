import { Test, TestingModule } from '@nestjs/testing';
import { RepeatableTaskController } from './repeatable-task.controller';

describe('RepeatableTaskController', () => {
  let controller: RepeatableTaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepeatableTaskController],
    }).compile();

    controller = module.get<RepeatableTaskController>(RepeatableTaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
