import { IsDateString, IsIn, IsString, MinLength } from "class-validator";

export class CreateJambAparatoDto {
    @IsString()
    @MinLength(1)
    nombre:string;

    @IsDateString()
    año: string;

    @IsString()
    @MinLength(1)
    @IsIn(['B1', 'B2', 'B3', 'C1', 'C2', 'C3', 'C4', 'A1', 'A2'])
    aula: string;

    @IsString()
    @MinLength(1)
    @IsIn(['Proyector', 'Ordenador', 'Pizarra Digital', 'Auriculares', 'Altavoces'])
    tipo: string;

}
