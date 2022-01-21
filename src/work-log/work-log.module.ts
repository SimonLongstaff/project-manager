import { Module } from '@nestjs/common';
import { WorkLogController } from './work-log.controller';
import { WorkLogService } from './work-log.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { work_log } from './work_log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([work_log])],
  controllers: [WorkLogController],
  providers: [WorkLogService],
})
export class WorkLogModule {}
