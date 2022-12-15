import { IsBoolean, IsDate, IsOptional, IsString, IsUUID } from "class-validator";
import { isBoolean, IsEmail, IsIn, MinLength } from "class-validator";

export class CreateMjmgindicenciaDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly uuid:string

    @IsDate()
    readonly fecha:string

    @IsString()
    @MinLength(1)
    readonly descripcion:string

    @IsString()
    @IsIn(["pendiente","finalizada","en proceso"])
    readonly nombre:string = "pendiente"

}
