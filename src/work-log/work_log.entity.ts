import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

}
