import { Module } from '@nestjs/common';
import { SubtasksController } from './subtasks.controller';
import { SubtasksService } from './subtasks.service';
import { subtasks } from './subtasks.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([subtasks])],
  controllers: [SubtasksController],
  providers: [SubtasksService]
})
export class SubtasksModule {}
