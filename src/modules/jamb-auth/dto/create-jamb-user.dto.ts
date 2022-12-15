import { IsEmail, IsIn, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateJambAuthDto {
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
    /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    @IsString()
    @MinLength(1)
    nombre:string;

    @IsString()
    @MinLength(1)
    @IsIn(['usuario', 'profesor', 'coordinador Tic', 'administrador'])
    rol: string;
}
