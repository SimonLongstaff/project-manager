import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { tasks } from './tasks.entity';
import { TasksService } from './tasks.service';

@Crud({
  model: {
    type: tasks,
  },
})
@ApiTags('Tasks')
@Controller('tasks')
export class TasksController implements CrudController<tasks> {
  constructor(public service: TasksService) {}

  @Get('/project_id=:project_id')
  findAll(@Param('project_id') project_id: string) {
    return this.service.getAllByProjectId(project_id);
  }
}
