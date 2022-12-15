import { IsIn, IsString, MinLength } from "class-validator";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CreateIncidenciaDto {

    

    @IsString()
    @MinLength(30)
    descpricion:string;

    @IsString()
    fecha:string;

    @IsIn(['pendiente', 'finalizada', 'en proceso'])
    status: string = 'pendiente';
}
