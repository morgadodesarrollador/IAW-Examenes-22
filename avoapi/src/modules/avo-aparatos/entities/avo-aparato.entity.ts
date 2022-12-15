import { AvoIncidencia } from 'src/modules/avo-incidencias/entities/avo-incidencia.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class AvoAparato {
  @PrimaryColumn()
  cod: string;

  @Column('text', { unique: true })
  nombre: string;

  @Column('text')
  tipo: string;

  @Column('int')
  anio: number;

  @Column('text')
  aula: string;

  @OneToMany(
    () => AvoIncidencia,
    (AvoIncidencia) => AvoIncidencia.avoaparato,
  )
  avoincidencia?: AvoIncidencia[];
}
