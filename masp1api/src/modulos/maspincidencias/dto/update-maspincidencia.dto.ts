import { PartialType } from '@nestjs/mapped-types';
import { CreateMaspincidenciaDto } from './create-maspincidencia.dto';

export class UpdateMaspincidenciaDto extends PartialType(CreateMaspincidenciaDto) {}
