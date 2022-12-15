import { IsIn, IsString, MaxLength, MinLength } from "class-validator";

export class CreateAparatoDto {

    @IsString()
    @MinLength(1)
    nombnre:string;

    @IsString()
    @MinLength(1)
    anio:string;

    @IsIn(['B1', 'B2', 'B3', 'C1', 'C2', 'C3', 'C4', 'A1', 'A2'])
    aula: string;
    @IsIn(['Proyector', 'Ordenador', 'Pizarra Digital', 'Auriculares', 'Altavoces'])
    tipo: string;
}
