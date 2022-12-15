import { MJMGincidencia } from "src/mjmgindicencias/entities/mjmgindicencia.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class MJMGaparato {

    @PrimaryColumn('string')
    cod:string

    @Column('string',{})
    nombre: string

    @Column('number',{})
    año:number

    @Column('string',{})
    aula:string

    @Column('string',{})
    tipo:string

    @OneToMany(
        () => MJMGincidencia,
        (MJMGincidencia) => MJMGincidencia.aparato,
        {cascade: false}
    )
    Incidencias:MJMGincidencia[]
}