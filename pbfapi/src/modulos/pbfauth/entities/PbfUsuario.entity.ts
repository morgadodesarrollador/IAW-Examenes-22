import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class PbfUsuario {

    @PrimaryColumn()
    idea: string;

    @Column('text', { nullable: true} )
    email: string;

    @Column('text', { nullable: true} )
    password: string;

    @Column('text')
    nombre: string;

    @Column('bool', { default: true })
    isActive: boolean;

    @Column('text', {
        array: true,
        default: ['profesor']
    })
    roles: string[]


}
