import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { repeatable_tasks } from './Repeatable_Tasks.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RepeatableTaskService extends TypeOrmCrudService<repeatable_tasks> {
  constructor(@InjectRepository(repeatable_tasks) repo) {
    super(repo);
  }
}
