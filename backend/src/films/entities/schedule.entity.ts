import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Film } from "./films.entity";

@Entity()
export class Schedule {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    daytime: string;
    @Column()
    hall: string;
    @Column()
    rows: number;
    @Column()
    seats: number;
    @Column()
    price: number;
    @Column('text', {array: true})
    taken: string[];
    @Column('uuid')
    filmId: string;

    @ManyToOne(() => Film, (film) => film.id)
    @JoinColumn({ name: "filmId" })
    film: Film
}