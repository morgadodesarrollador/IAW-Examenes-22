
import { JambIncidencia } from "src/modules/jamb-incidencias/entities/jamb-incidencia.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity('jambUsuario')
export class JambUsuario {
    @PrimaryGeneratedColumn()
    idea:string;

    @Column('text', {unique: true})
    email: string;

    @Column('text', {select: false})
    password: string;

    @Column('text')
    nombre: string;

    @Column('bool', {default: true})
    isActive: true;

    @Column('text', {
        array: true,
        default: ['profesor']
    })
    rol: string[];

    @OneToMany(
        () => JambIncidencia,
        (JambIncidencia) => JambIncidencia.idUsuario,
        {cascade: false}
    )
    JambUsuario?: JambIncidencia[];
}