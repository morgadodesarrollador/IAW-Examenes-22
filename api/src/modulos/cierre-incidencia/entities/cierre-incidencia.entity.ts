import { IsIn } from "class-validator";
import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { Incidencia } from '../../incidencia/entities/incidencia.entity';


@Entity()
export class CierreIncidencia {
    @PrimaryColumn('text')
    Id: string;

    @Column('date')
    fecha: Date;

    @Column('text')
    @IsIn(['Si', 'No', 'En Curso',])
    estado: string;

    @Column('text')
    motivo: string;

    @Column('int')
    precioTotal: number

    @OneToOne(
        (type) => Incidencia,
        (incidencia) => incidencia.cierre,
        { cascade: false }
    )
    incidencia: Incidencia


}
