import { PartialType } from '@nestjs/mapped-types';
import { CreateMjmgindicenciaDto } from './create-mjmgindicencia.dto';

export class UpdateMjmgindicenciaDto extends PartialType(CreateMjmgindicenciaDto) {}
