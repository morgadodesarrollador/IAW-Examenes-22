import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('maspUsuario')
export class Usuario {

    @PrimaryGeneratedColumn()
    idea:string;

    @Column('text', { unique: true })
    email: string;

    @Column('text', { select: false })
    password: string;

    @Column('text')
    nombre: string;

    @Column('bool', { default: true })
    isActive: boolean;

    @Column('text', {
        array: true,
        default: ['usuario','profesor','coordinador Tic','administrador']
    })
    rol: string[]

}