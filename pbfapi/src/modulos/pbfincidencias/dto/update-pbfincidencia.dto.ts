import { PartialType } from '@nestjs/mapped-types';
import { CreatePbfincidenciaDto } from './create-pbfincidencia.dto';

export class UpdatePbfincidenciaDto extends PartialType(CreatePbfincidenciaDto) {}
