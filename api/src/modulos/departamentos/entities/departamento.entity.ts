import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Profesor } from '../../profesor/entities/profesor.entity';


@Entity()
export class Departamento {
    @PrimaryColumn('text')
    Id: string;

    @Column('text')
    nombre: string;

   @OneToMany(
    (type) => Profesor,
    (profesor) => profesor.departamento,
    { cascade: false }
   )
   profesores?: Profesor[]

}
