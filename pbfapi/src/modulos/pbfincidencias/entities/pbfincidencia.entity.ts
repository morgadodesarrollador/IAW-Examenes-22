import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Pbfincidencia {
    
    @PrimaryColumn()
    codigo: string;

    @Column('text', { nullable: true} )
    descripcion: string;

    @Column('text', { nullable: true} )
    fecha: string;

    @Column('bool', { default: true })
    status: boolean;

}
