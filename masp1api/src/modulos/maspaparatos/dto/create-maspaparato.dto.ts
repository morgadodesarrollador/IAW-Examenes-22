import { IsDate, IsEmail, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateMaspaparatoDto {
    @PrimaryGeneratedColumn()
    codigo:string;

    @IsString()
    nombre: string;

    @IsString()
    tipo: string;

    @IsNumber()
    anio: number;

    @IsString()
    aula: string;
}
