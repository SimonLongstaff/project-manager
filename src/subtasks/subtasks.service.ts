import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { subtasks } from './subtasks.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SubtasksService extends TypeOrmCrudService<subtasks> {
    constructor(@InjectRepository(subtasks) repo){
        super(repo)
    }
}
