import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Incidencia } from '../../incidencia/entities/incidencia.entity';


@Entity()
export class Aula {
    @PrimaryColumn('text')
    codAula: string;

    @Column('text')
    nombre: string;

    @Column('text')
    edificio: string;

    @OneToMany(
        (type) => Incidencia,
        (incidencia) => incidencia.aula,
        { cascade: false }
    )
    incidencias: Incidencia[]
}
