import { JambIncidencia } from "src/modules/jamb-incidencias/entities/jamb-incidencia.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class JambAparato {
    @PrimaryGeneratedColumn()
    cod: string;

    @Column('text')
    nombre: string;

    @Column('text', {
        array: true
    })
    aula: string;

    @Column('year')
    año: Date;

    @Column('text', {
        array: true
    })
    tipo: string;

    @OneToMany(
        () => JambIncidencia,
        (JambIncidencia) => JambIncidencia.codaparato,
        {cascade: false}
    )
    aparato?: JambIncidencia[];


}
