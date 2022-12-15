import { Usuario } from "src/modulos/maspauth/entities/maspUsuario.entity";
import { Incidencia } from "src/modulos/maspincidencias/entities/maspincidencia.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('maspAparato')
export class Aparato {

    @PrimaryGeneratedColumn()
    cod: string;

    @Column('text', { unique: true })
    nombre: string;

    @Column('text', {
        array: true,
        default: ['Proyector', 'Ordenador', 'Pizarra Digital', 'Altavazos']
    })
    tipo: string[]

    @Column('text')
    anio: string;

    @Column('text', {
        array: true,
        default: ['B1', 'B2', 'B3', 'C1', 'C2', 'C3', 'C4', 'A1', 'A2']
    })
    aula: string[]

    //Relacion a incidencias
    @OneToMany(
        () => Incidencia,
        (incidencia) => incidencia.aparato,
        { cascade: false, eager: false }
    )
    Incidencia?: Incidencia[];

}
