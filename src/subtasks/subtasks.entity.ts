/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class subtasks {

    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty()
    @Column()
    task_id: number;

    @ApiProperty()
    @Column()
    subtask_name: string;

    @ApiProperty()
    @Column()
    subtask_desc: string;

    @ApiProperty()
    @Column()
    is_complete: number;

    @ApiProperty()
    @Column()
    percentage_complete: number;

    @ApiProperty()
    @Column()
    complexity: number;
}