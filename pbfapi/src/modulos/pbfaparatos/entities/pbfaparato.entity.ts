import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Pbfaparato {
    @PrimaryColumn()
    cod: string;

    @Column('text' )
    nombre: string;

    @Column('text')
    tipo: string;

    @Column('integer' )
    anio: number;

    @Column('text' )
    aula: string;
}
