import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Material } from '../../material/entities/material.entity';


@Entity()
export class TipoMaterial {

    @PrimaryGeneratedColumn('increment')
    Id: number;

    @Column('text')
    nombre: string

    @OneToMany(
        (type) => Material,
        (material) => material.tipo,
        { cascade: false }
    )
    materiales: Material[]
}
