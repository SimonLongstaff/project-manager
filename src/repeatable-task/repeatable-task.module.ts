import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { repeatable_tasks } from './Repeatable_Tasks.entity';
import { RepeatableTaskController } from './repeatable-task.controller';
import { RepeatableTaskService } from './repeatable-task.service';

@Module({
  imports: [TypeOrmModule.forFeature([repeatable_tasks])],
  controllers: [RepeatableTaskController],
  providers: [RepeatableTaskService],
})
export class RepeatableTaskModule {}
