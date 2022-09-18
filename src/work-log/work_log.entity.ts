import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinTable, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { projects } from "../projects/project.entity";

@Entity()
export class work_log {
  @PrimaryGeneratedColumn()
  id: number;


  @ApiProperty()
  @Column()
  subtask_id: number;

  @ApiProperty()
  @Column()
  date: Date;

  @ApiProperty()
  @Column()
  time_spent: number;

  @ApiProperty()
  @Column()
  percentage_done: number;

  @ApiProperty()
  @Column()
  project_id: number;

  @OneToOne(() => projects)
  @JoinTable()
  project: projects;
}
