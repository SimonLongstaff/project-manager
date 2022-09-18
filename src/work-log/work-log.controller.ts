import { Controller, Delete, Get, Param } from '@nestjs/common';
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

  @Delete('/subtask_id=:subtask_id')
  remove(@Param('subtask_id') subtask_id: string) {
    this.service.deleteBySubtask(subtask_id);
  }

  @Get('/subtask_id=:subtask_id')
  findAll(@Param('subtask_id') subtask_id: string) {
    return this.service.getBySubtaskID(subtask_id);
  }

  @Get('/project_id=:project_id')
  findAllByProject(@Param('project_id') project_id: string) {
    return this.service.getByProjectID(project_id);
  }

  @Get('/latest')
  getLatest() {
    return this.service.GetLatestLogWithProjectAndSubtak();
  }



}
