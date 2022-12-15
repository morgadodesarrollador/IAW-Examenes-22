import { Incicencia } from "src/modules/jlp-incicencias/entities/jlp-incicencia.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { isEntityName } from "typescript";

@Entity('jlpmAparato')
export class Aparato {

        @PrimaryGeneratedColumn()
        cod: string;
    
        @Column('text',{
            unique: true
        })
        nombre: string;
    
        @Column('text',{
            array:true,
            default: ['B1', 'B2', 'B3', 'C1','C2','C3','A1','A2']
        })
        aula: string;
    
        @Column('text',{
            array:true,
            default: ['Proyector', 'Ordenador', 'Pizarra Digital', 'Auriculares','Altavoces']
        })
        tipo: string;

        @Column('text',{
            nullable: true
        })
        ano: string;


        //Relacion
        
        @OneToMany(
            () => Incicencia,
            (Incicencia) => Incicencia.aparato,
            { cascade: false, eager: false  }
    
            
        )
        incicencias?: Incicencia[];
}
