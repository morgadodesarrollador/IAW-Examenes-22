import { Incidencia } from "src/modulos/maspincidencias/entities/maspincidencia.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('maspUsuario')
export class Usuario {

    @PrimaryGeneratedColumn()
    idea:string;

    @Column('text', { unique: true })
    email: string;

    @Column('text', { select: false })
    password: string;

    @Column('text')
    nombre: string;

    @Column('bool', { default: true })
    isActive: boolean;

    @Column('text', {
        array: true,
        default: ['usuario','profesor','coordinador Tic','administrador']
    })
    rol: string[]

    //Relacion a incidencias
    @OneToMany(
        () => Incidencia,
        (Incidencia) => Incidencia.usuario,
        { cascade: false, eager: false }
    )
    incidencia?: Incidencia[];

}