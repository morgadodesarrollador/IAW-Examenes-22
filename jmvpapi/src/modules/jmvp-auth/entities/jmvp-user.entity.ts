import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'jmvpUsuarios' })
export class JmvpUser {
    @PrimaryColumn('text')
    jmvpidea: string;
  
    @Column('text')
    jmvppassword: string;

    @Column('bool', { default: true })
    jmvpisActive: boolean;
  
    @Column('text', { default: "profesor" })
    jmvprol: string;

    @Column('text')
    jmvpnombre: string;
}