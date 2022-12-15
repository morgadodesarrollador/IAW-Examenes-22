import { IsString, MaxLength } from "class-validator";
import { IsNumber } from "class-validator/types/decorator/decorators";

export class CreateJlpAparatoDto {

    @IsString()
    @MaxLength(30)
    nombre: string;

    @IsString()
    @MaxLength(30)
    aula: string;

    @IsString()
    @MaxLength(30)
    tipo: string;

    @IsNumber()
    @MaxLength(30)
    ano: number;
}
