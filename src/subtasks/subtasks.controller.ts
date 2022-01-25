import { Controller, Get, Param } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { subtasks } from './subtasks.entity';
import { ApiTags } from '@nestjs/swagger';
import { SubtasksService } from './subtasks.service';

@Crud({
  model: {
    type: subtasks,
  },
})
@ApiTags('Subtasks')
@Controller('subtasks')
export class SubtasksController implements CrudController<subtasks> {
  constructor(public service: SubtasksService) {}

  @Get('/taskId=:task_id')
  findAll(@Param('task_id') task_id: string) {
    return this.service.getAllByTaskId(task_id);
  }

}
