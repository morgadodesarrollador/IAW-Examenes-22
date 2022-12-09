import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { TipoMaterial } from '../../tipo-material/entities/tipo-material.entity';
import { Incidencia } from '../../incidencia/entities/incidencia.entity';


@Entity()
export class Material {
    
    @PrimaryColumn('text')
    codMaterial: string;

    @Column('text', { unique: true})
    nombre: string;

    @Column('text', { unique: true})
    codaula: string

    @Column('int')
    anio: number

    @ManyToOne(
        (type) => TipoMaterial,
        (tipomaterial) => tipomaterial.materiales
    )
    tipo: TipoMaterial;

    @ManyToOne(
        (type) => Material,
        (material) => material.incidencias,
        { cascade: false }
    )
    incidencias: Incidencia[]
}
