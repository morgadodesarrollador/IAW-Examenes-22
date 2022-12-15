import { JambAparato } from "src/modules/jamb-aparatos/entities/jamb-aparato.entity";
import { JambUsuario } from "src/modules/jamb-auth/entities/jamb-Usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class JambIncidencia {
    @PrimaryGeneratedColumn('uuid')
    codigo: string;

    @Column('text')
    descripcion: string;

    @Column('date')
    fecha: Date;

    @Column('text', {
        array: true
    })
    status: string;

    @ManyToOne(
        () => JambAparato,
        (JambAparato) => JambAparato.JambIncidencia,
        {cascade: false}
    )
    codaparato?: JambAparato;

    @ManyToOne(
        () => JambUsuario,
        (JambUsuario) => JambUsuario.idea,
        {cascade: false}
    )
    idUsuario?: JambUsuario;    
}
