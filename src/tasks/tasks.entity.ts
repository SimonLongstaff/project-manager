import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class tasks {

    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty()
    @Column()
    project_id: number;

    @ApiProperty()
    @Column()
    task_name: string;

    @ApiProperty()
    @Column()
    task_desc: string;

    @ApiProperty()
    @Column()
    is_complete: number;

    @ApiProperty()
    @Column()
    percentage_complete: number;
}