import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { work_log } from './work_log.entity';
import { WorkLogService } from './work-log.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: work_log,
  },
})
@ApiTags('Work Log')
@Controller('work-log')
export class WorkLogController implements CrudController<work_log> {
  constructor(public service: WorkLogService) {}
}
