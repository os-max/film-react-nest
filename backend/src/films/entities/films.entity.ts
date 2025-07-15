import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Schedule } from "./schedule.entity";

@Entity()
export class Film {
    @PrimaryGeneratedColumn('uuid')
    id: number;
    
    @Column()
    title: string;
    @Column('numeric', {precision: 2, scale: 1})
    rating: number;
    @Column()
    director: string;
    @Column('text', {array: true})
    tags: string[];
    @Column()
    image: string;
    @Column()
    cover: string;
    @Column()
    about: string;
    @Column()
    description: string;

    @OneToMany(() => Schedule, (schedule) => schedule.film)
    schedule: Schedule[]

}