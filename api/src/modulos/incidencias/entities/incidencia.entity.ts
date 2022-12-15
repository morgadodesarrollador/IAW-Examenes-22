import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Incidencias')
export class Incidencia {

    @PrimaryGeneratedColumn('uuid')
    codigo: string;

    @Column('text')
    descripcionb: string;

    @Column('text')
    fecha: string;

    @Column('text')
    status: string;
}
