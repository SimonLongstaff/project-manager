import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { tasks } from './tasks.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([tasks])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
