import { Module } from '@nestjs/common';
import { RepeatableLogController } from './repeatable-log.controller';
import { RepeatableLogService } from './repeatable-log.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { repeatable_task_log } from './repeatable_task_log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([repeatable_task_log])],
  controllers: [RepeatableLogController],
  providers: [RepeatableLogService],
})
export class RepeatableLogModule {}
