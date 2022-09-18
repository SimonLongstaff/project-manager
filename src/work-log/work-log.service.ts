import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { work_log } from './work_log.entity';

@Injectable()
export class WorkLogService extends TypeOrmCrudService<work_log> {
  constructor(@InjectRepository(work_log) repo) {
    super(repo);
  }

  async deleteBySubtask(id): Promise<void> {
    await this.repo.delete({ subtask_id: id });
  }

  async getBySubtaskID(id): Promise<work_log[]> {
    return await this.repo.find({ subtask_id: id });
  }

  async getByProjectID(id): Promise<work_log[]> {
    return await this.repo.find({ project_id: id });
  }

  async GetLatestLogWithProjectAndSubtak(): Promise<work_log> {
    return await this.repo.query(
      'SELECT * FROM work_log INNER JOIN projects ON work_log.project_id = projects.id INNER JOIN subtasks ON work_log.subtask_id = subtasks.id ORDER BY work_log.id DESC LIMIT 5',
    );
  }
}
