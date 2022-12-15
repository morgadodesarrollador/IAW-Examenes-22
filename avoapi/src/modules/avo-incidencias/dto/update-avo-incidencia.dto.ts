import { PartialType } from '@nestjs/mapped-types';
import { CreateAvoIncidenciaDto } from './create-avo-incidencia.dto';

export class UpdateAvoIncidenciaDto extends PartialType(CreateAvoIncidenciaDto) {}
