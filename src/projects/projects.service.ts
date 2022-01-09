import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { projects } from './project.entity';

@Injectable()
export class ProjectsService extends TypeOrmCrudService<projects> {
    constructor(@InjectRepository(projects) repo){
        super(repo)
    }
}
