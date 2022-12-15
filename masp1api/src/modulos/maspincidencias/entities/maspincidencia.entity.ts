import { Aparato } from "src/modulos/maspaparatos/entities/maspaparato.entity";
import { Usuario } from "src/modulos/maspauth/entities/maspUsuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('maspIncidencia')
export class Incidencia {
    @PrimaryGeneratedColumn('uuid')
    codigo:string;

    @Column('text', { unique: true })
    descripcion: string;

    @Column('date')
    fecha: Date;

    @Column('text', {
        array: true,
        default: ['pendiente', 'finalizada', 'en proceso' ]
    })
    status: string[]

    //Relacion a aparatos
    @ManyToOne(
        () => Aparato,
        (Aparato) => Aparato.Incidencia,
        { cascade: false, eager: false }
    )
    aparato?: Aparato

    //Relacion a usuarios
    @ManyToOne(
        () => Usuario,
        (Usuario) => Usuario.incidencia,
        { cascade: false, eager: false }
    )
    usuario?: Usuario

}
