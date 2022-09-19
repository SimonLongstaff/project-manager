import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { repeatable_task_log } from './repeatable_task_log.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RepeatableLogService extends TypeOrmCrudService<repeatable_task_log> {
  constructor(@InjectRepository(repeatable_task_log) repo) {
    super(repo);
  }
}
