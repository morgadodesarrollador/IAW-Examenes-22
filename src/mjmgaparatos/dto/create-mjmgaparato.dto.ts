import { IsNumber, IsOptional, IsString } from "class-validator";
import { isBoolean, IsEmail, IsIn, MinLength } from "class-validator";

export class CreateMjmgaparatoDto {

    @IsNumber()
    readonly cod:string

    @IsString()
    @MinLength(1)
    readonly nombre:string

    @IsNumber()
    @IsOptional()
    readonly año?:number

    @IsString()
    @IsIn(["B1","B2","B3","C1","C2","C3","C4","D1","D2"])
    readonly aula:string

    @IsString()
    @IsIn(["Proyector","Ordenador","Pizarra Digital","Auriculares","Altavoces"])
    readonly tipo:string
}
