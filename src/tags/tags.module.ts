import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tags } from './tags.entity';

@Module({
  imports: [TypeOrmModule.forFeature([tags])],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
