import { kMaxLength } from "buffer";
import { IsString, MaxLength } from "class-validator"
import { isDate } from "util/types"


export class CreatePbfincidenciaDto {
    
    @IsString()
    codigo: string;

    @IsString()
    @MaxLength(150)
    descripcion: string;

    @IsString()
    fecha: string;

}
