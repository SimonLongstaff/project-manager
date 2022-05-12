import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class projects {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  project_name: string;

  @ApiProperty()
  @Column()
  project_desc: string;

  @ApiProperty()
  @Column()
  is_complete: number;

  @ApiProperty()
  @Column()
  tag_id: number;

  @ApiProperty()
  @Column()
  is_archived: boolean;
}
