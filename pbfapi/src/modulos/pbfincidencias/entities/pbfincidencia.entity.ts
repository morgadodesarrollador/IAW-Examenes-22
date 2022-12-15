import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Pbfincidencia {
    
    @PrimaryColumn()
    codigo: string;

    @Column('text', { nullable: true} )
    descripcion: string;

    @Column('text', { nullable: true} )
    fecha: string;

    @Column('text', { default: 'en proceso' })
    status: string;

}
