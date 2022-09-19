import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { repeatable_task_log } from './repeatable_task_log.entity';
import { ApiTags } from '@nestjs/swagger';
import { RepeatableLogService } from './repeatable-log.service';

@Crud({
  model: {
    type: repeatable_task_log,
  },
})
@ApiTags('Repeatable Task Log')
@Controller('repeatable-log')
export class RepeatableLogController
  implements CrudController<repeatable_task_log>
{
  constructor(public service: RepeatableLogService) {}
}
