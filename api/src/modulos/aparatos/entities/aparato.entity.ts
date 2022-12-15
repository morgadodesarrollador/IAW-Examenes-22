import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('aparatos')
export class Aparato {
    @PrimaryGeneratedColumn('uuid')
    cod:string;

    @Column('text', { unique: true })
    nombre: string;

    @Column('text', { unique: true })
    aula: string;

    @Column('text', { unique: true })
    tipo: string;

    @Column('text')
    anio: string;

    
}
