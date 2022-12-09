import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Departamento } from '../../departamentos/entities/departamento.entity';
import { Incidencia } from '../../incidencia/entities/incidencia.entity';

@Entity()
export class Profesor {
    @PrimaryColumn('text')
    idEa: string;

    @Column('text')
    nombre: string;

    @Column('text')
    perfil?: string;

    @Column('text')
    correo: string;

    @ManyToOne(
        (type) => Departamento,
        (departamento) => departamento.profesores
    )
    departamento: Departamento

    @OneToMany(
        (type) => Incidencia,
        (incidencia) => incidencia.profesor,
        { cascade: false }
    )
    incidencias: Incidencia[]

    @OneToMany(
        (type) => Incidencia,
        (incidencia) => incidencia.coordinadorTDE,
        { cascade: false }
    )
    gestiona: Incidencia[]
}
