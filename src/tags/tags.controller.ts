import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { tags } from './tags.entity';
import { ApiTags } from '@nestjs/swagger';
import { TagsService } from './tags.service';

@Crud({
  model: {
    type: tags,
  },
})
@ApiTags('Tags')
@Controller('tags')
export class TagsController implements CrudController<tags> {
  constructor(public service: TagsService) {}
}
