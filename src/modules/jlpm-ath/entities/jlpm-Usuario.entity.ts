import { Incicencia } from "src/modules/jlp-incicencias/entities/jlp-incicencia.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('jlpmUsuario')
export class Usuario {

    @PrimaryGeneratedColumn()
    idea: string;

    @Column('text', { unique: true} )
    email: string;

    @Column('text', { nullable: true })
    password: string;

    @Column('text', { nullable: true })
    nombre: string;

    @Column('text', { nullable: true })
    isActive: boolean;

    @Column('text', {
        array:true,
        default: ['usuario','profesor','coordinador Tic','administrador']
    })
    rol: string[]



    //Relacion

    @OneToMany(
        () => Incicencia,
        (Incicencia) => Incicencia.usuario,
        { cascade: false, eager: false  }

    )
    incidencias?: Incicencia[];
}
