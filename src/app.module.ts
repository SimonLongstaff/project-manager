import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { SubtasksModule } from './subtasks/subtasks.module';
import { WorkLogModule } from './work-log/work-log.module';
import { TagsModule } from './tags/tags.module';
import { RepeatableTaskModule } from './repeatable-task/repeatable-task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/ProjectDatabase.db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: false,
    }),
    ProjectsModule,
    TasksModule,
    SubtasksModule,
    WorkLogModule,
    TagsModule,
    RepeatableTaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
