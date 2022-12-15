import { Column, PrimaryGeneratedColumn } from "typeorm";

export class JlpAparato {

        @PrimaryGeneratedColumn("uuid")
    
        id: string;
    
        @Column('text',{
            unique: true
        })
        nombre: string;
    
        @Column('text',{
            unique: true
        })
        aula: string;
    
        @Column('text',{
            nullable: true
        })
        tipo: string;

        @Column('text',{
            nullable: true
        })
        año: string;
    
}
