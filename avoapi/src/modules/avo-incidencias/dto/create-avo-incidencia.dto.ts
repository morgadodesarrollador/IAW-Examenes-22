import { IsString, MinLength } from "class-validator";

export class CreateAvoIncidenciaDto {
    @IsString()
    @MinLength(1)
    descripcion: string;

    @IsString()
    @MinLength(1)
    fecha: string;

    @IsString()
    codAvoAparato?: string;
}
