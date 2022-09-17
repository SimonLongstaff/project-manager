import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class repeatable_tasks {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  task: string;

  @ApiProperty()
  @Column()
  tag_id: number;

  @ApiProperty()
  @Column()
  archived: boolean;

  @ApiProperty()
  @Column()
  schedule: number;
}
