import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { work_log } from './work_log.entity';

@Injectable()
export class WorkLogService extends TypeOrmCrudService<work_log> {
  constructor(@InjectRepository(work_log) repo) {
    super(repo);
  }
}
