import { PartialType } from '@nestjs/mapped-types';
import { CreateDtgincidenciaDto } from './create-dtgincidencia.dto';

export class UpdateDtgincidenciaDto extends PartialType(CreateDtgincidenciaDto) {}
