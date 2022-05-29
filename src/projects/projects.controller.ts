import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { projects } from './project.entity';
import { ProjectsService } from './projects.service';

@Crud({
  model: {
    type: projects,
  },
})
@ApiTags('Projects')
@Controller('projects')
export class ProjectsController implements CrudController<projects> {
  constructor(public service: ProjectsService) {}

  @Get('/tag_id=:tag_id')
  findAll(@Param('tag_id') tag_id: string) {
    return this.service.getByTagID(tag_id);
  }
}
