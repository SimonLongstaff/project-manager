import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { tags } from './tags.entity';

@Injectable()
export class TagsService extends TypeOrmCrudService<tags> {
  constructor(@InjectRepository(tags) repo) {
    super(repo);
  }
}
