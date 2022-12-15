import { Column, PrimaryGeneratedColumn } from "typeorm";

export class JlpIncicencia {
    @PrimaryGeneratedColumn("uuid")

    id: string;

    @Column('text',{
        unique: true
    })
    descripcion: string;

    @Column('text',{
        unique: true
    })
    fecha: string;

    @Column('text',{
        nullable: true
    })
    status: string;
}
