import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { repeatable_tasks } from './Repeatable_Tasks.entity';
import { RepeatableTaskService } from './repeatable-task.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: repeatable_tasks,
  },
})
@ApiTags('Repeatable Task')
@Controller('repeatable-task')
export class RepeatableTaskController
  implements CrudController<repeatable_tasks>
{
  constructor(public service: RepeatableTaskService) {}
}
