import { PartialType } from '@nestjs/mapped-types';
import { CreateJlpIncicenciaDto } from './create-jlp-incicencia.dto';

export class UpdateJlpIncicenciaDto extends PartialType(CreateJlpIncicenciaDto) {}
