import { IsNumber, IsString } from "class-validator"
import { isString } from "util"

export class CreatePbfaparatoDto {
    
    @IsString()
    cod: string;
    
    @IsString()
    nombre: string;
    
    @IsString()
    tipo: string;
    
    @IsNumber()
    anio: number;
    
    @IsString()
    aula: string;
}
