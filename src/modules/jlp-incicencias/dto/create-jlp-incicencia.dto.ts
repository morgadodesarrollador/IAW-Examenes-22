import { IsString, MaxLength } from "class-validator";

export class CreateJlpIncicenciaDto {

    @IsString()
    @MaxLength(50)
    descripcion: string;

    @IsString()
    @MaxLength(30)
    fecha: string;

    @IsString()
    @MaxLength(30)
    status: boolean;

    @IsString()
    codAp?: string;

    @IsString()
    idea?: string;
    
}
