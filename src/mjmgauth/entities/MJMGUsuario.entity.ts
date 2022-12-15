import { MJMGincidencia } from "src/mjmgindicencias/entities/mjmgindicencia.entity";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";


@Entity()
export class MJMGUsuario {
    static MJMGincidencia(arg0: () => any, MJMGincidencia: any) {
        throw new Error("Method not implemented.");
    }

    @PrimaryColumn('string')
    idea: string

    @Column('string',{
        unique: true
    })
    email:string

    @Column('string',{})
    password:string

    @Column('boolean',{})
    isActive:boolean

    @Column('string',{})
    rol:string

    @OneToMany(
        () => MJMGincidencia,
        (MJMGincidencia) => MJMGincidencia.usuario,
        {cascade: false}
    )
    Incidencias:MJMGincidencia[]

    @BeforeInsert()
        async encryptPasswd(){
            //this.password = await bcrypt.hash(password, 8); No me dio tiempo xd
        }
}
