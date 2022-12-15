import { IsDate, IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateMaspincidenciaDto {
    @IsString()
    @MinLength(1)
    descripcion: string;

    @IsDate()
    fecha: Date;

    @IsString()
    @MinLength(1)
    status:string;

    @IsString()
    codAp?: string;

    @IsString()
    idea?: string;
}
