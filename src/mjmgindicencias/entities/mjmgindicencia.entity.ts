import { MJMGaparato } from "src/mjmgaparatos/entities/mjmgaparato.entity";
import { MJMGUsuario } from "src/mjmgauth/entities/MJMGUsuario.entity";
import { BeforeInsert, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuidv4} from 'uuid';

@Entity()
export class MJMGincidencia {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('string',{})
    fecha:string

    @Column('string',{})
    descripcion:string

    @Column('string',{})
    status:string


    @ManyToOne(
        () => MJMGUsuario,
        (MJMGUsuario) => MJMGUsuario.Incidencias,
        {cascade: false}
    )
    usuario?:MJMGUsuario

    @ManyToOne(
        () => MJMGUsuario,
        (MJMGUsuario) => MJMGUsuario.Incidencias,
        {cascade: false}
    )
    aparato?:MJMGaparato

        @BeforeInsert()
        async AssignID(){
            this.id = uuidv4()
        }

}
