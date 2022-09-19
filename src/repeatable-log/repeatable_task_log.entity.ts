import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class repeatable_task_log {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  repeatable_task_id: number;

  @ApiProperty()
  @Column()
  date: Date;
}
