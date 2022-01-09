import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { tasks } from './tasks.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService extends TypeOrmCrudService<tasks> {
    constructor(@InjectRepository(tasks) repo){
        super(repo)
    }
}
