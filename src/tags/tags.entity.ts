import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tags {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  tag_name: string;

  @ApiProperty()
  @Column()
  tag_type: number;

  @ApiProperty()
  @Column()
  tag_colour: string;
}
