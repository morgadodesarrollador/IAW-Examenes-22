import { IsDateString, IsIn, IsString, MinLength } from "class-validator";

export class CreateJambIncidenciaDto {
    @IsString()
    @MinLength(1)
    descripcion:string;

    @IsDateString()
    fecha: string;

    @IsString()
    @MinLength(1)
    @IsIn(['pendiente', 'finalizada', 'en proceso'])
    status: string;
}
