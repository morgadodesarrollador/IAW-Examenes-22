import { IsString } from 'class-validator';
import {
  IsIn,
  IsNumber,
  IsPositive,
  MinLength,
} from 'class-validator/types/decorator/decorators';

export class CreateAvoAparatoDto {
  @IsString()
  @MinLength(1)
  cod: string;

  @IsString()
  @MinLength(1)
  nombre: string;

  @IsString()
  @MinLength(1)
  @IsIn([
    'Proyector',
    'Ordenador',
    'Pizarra Digital',
    'Auriculares',
    'Altavoces',
  ])
  tipo: string;

  @IsNumber()
  @IsPositive()
  anio: number;

  @IsString()
  @MinLength(1)
  @IsIn(['B1', 'B2', 'B3', 'C1', 'C2', 'C3', 'C4', 'A1', 'A2'])
  aula: string;
}
