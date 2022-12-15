import { PartialType } from '@nestjs/mapped-types';
import { CreateJambIncidenciaDto } from './create-jamb-incidencia.dto';

export class UpdateJambIncidenciaDto extends PartialType(CreateJambIncidenciaDto) {}
