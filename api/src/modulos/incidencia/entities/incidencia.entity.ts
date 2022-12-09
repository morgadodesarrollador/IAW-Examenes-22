import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profesor } from '../../profesor/entities/profesor.entity';
import { Aula } from '../../aulas/entities/aula.entity';
import { IsIn } from "class-validator";
import { Material } from '../../material/entities/material.entity';
import { CierreIncidencia } from '../../cierre-incidencia/entities/cierre-incidencia.entity';


@Entity()
export class Incidencia {

    @PrimaryGeneratedColumn('increment')
    Id: number;

    @Column('text')
    nombre: string;

    @Column('date')
    fecha: Date;

    @Column('text')
    @IsIn(['Urgente', 'Alta', 'Normal', 'Baja'])
    prioirdad: string;

    @ManyToOne(
        (type) => Profesor,
        (profesor) => profesor
    )
    profesor: Profesor;

    @ManyToOne(
        (type) => Aula,
        (aula) => aula.incidencias
    )
    aula: Aula

    @ManyToOne(
        (type) => Incidencia,
        (incidencia) => incidencia.material
    )
    material: Material

    @ManyToOne(
        (type) => Profesor,
        (profesor) => profesor.gestiona
    )
    coordinadorTDE: Profesor;

    @OneToOne(
        (type) => CierreIncidencia,
        (cierre) => cierre.incidencia
    )
    @JoinColumn()
    cierre: CierreIncidencia;
   
}
