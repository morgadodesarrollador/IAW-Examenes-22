import { Aparato } from "src/modules/jlp-aparatos/entities/jlp-aparato.entity";
import { Usuario } from "src/modules/jlpm-ath/entities/jlpm-Usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('jlpmIncidencias')
export class Incicencia {
    @PrimaryGeneratedColumn('uuid')

    codigo: string;

    @Column('text',{
        unique: true
    })
    descripcion: string;

    @Column('text',{
        unique: true
    })
    fecha: string;

    @Column('text',{
        nullable: true
    })
    status: string;

    //Relacion con aparato

    @ManyToOne(
        () => Aparato,
        (aparato) => aparato.incicencias,
        { cascade: false }
    )
    aparato?: Aparato

    //Relacion con usuario

    @ManyToOne(
        () => Usuario,
        (usuario) => usuario.incidencias,
        { cascade: false }
    )
    usuario?: Usuario
    
    
}
