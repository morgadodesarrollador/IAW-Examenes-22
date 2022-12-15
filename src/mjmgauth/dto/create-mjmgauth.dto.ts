import { IsBoolean, IsOptional, IsString, Matches } from "class-validator";
import { isBoolean, IsEmail, IsIn, MinLength } from "class-validator";
import { BeforeInsert } from "typeorm";

export class CreateMJMGUserDto {

    @IsString()
    @MinLength(1)
    readonly idea:string

    @IsEmail()
    readonly email:string

    @IsString()
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    readonly password:string

    @IsBoolean()
    @IsOptional()
    readonly isActive?:boolean

    @IsString()
    @IsOptional()
    @IsIn(["usuario","profesor","coordinador Tic","administrador"])
    readonly rol?:string

    @IsString()
    @MinLength(1)
    readonly nombre:string


}
