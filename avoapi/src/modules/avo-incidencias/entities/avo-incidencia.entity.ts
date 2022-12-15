import { AvoAparato } from "src/modules/avo-aparatos/entities/avo-aparato.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AvoIncidencia {
    @PrimaryGeneratedColumn('uuid')
    codigo: string;

    @Column('text')
    descripcion: string;

    @Column('text')
    fecha: string;

    @Column('bool', { default: true })
    isActive: boolean;

    @ManyToOne(
        () => AvoAparato,
        (AvoAparato) => AvoAparato.avoincidencia,
        { cascade: false }
    )
    avoaparato?: AvoAparato;

}
