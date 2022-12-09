import { PartialType } from '@nestjs/mapped-types';
import { CreateCierreIncidenciaDto } from './create-cierre-incidencia.dto';

export class UpdateCierreIncidenciaDto extends PartialType(CreateCierreIncidenciaDto) {}
