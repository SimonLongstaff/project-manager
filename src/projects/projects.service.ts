import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { projects } from './project.entity';

@Injectable()
export class ProjectsService extends TypeOrmCrudService<projects> {
  constructor(@InjectRepository(projects) repo) {
    super(repo);
  }


  async getByTagID(id): Promise<projects[]> {
    return await this.repo.find({ tag_id: id });
  }
}
