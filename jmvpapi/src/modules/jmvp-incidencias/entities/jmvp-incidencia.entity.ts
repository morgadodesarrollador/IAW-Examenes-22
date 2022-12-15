import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { JmvpAparato } from '../../jmvp-aparatos/entities/jmvp-aparato.entity';

@Entity({ name: 'jmvpIncidencias' })
export class JmvpIncidencia {
    @PrimaryGeneratedColumn('uuid')
    jmvpcodigo: string;
  
    @Column('text')
    jmvpdescripcion: string;
  
    @Column('text')
    jmvpfecha: string;
      
    @Column('text')
    jmvpstatus: string;

    @ManyToOne(
        () => JmvpAparato,
        (JmvpAparato) => JmvpAparato.jmvpcod,
        { cascade: true, eager: true  }
    )
    jmvpcod?: JmvpAparato[];
}
