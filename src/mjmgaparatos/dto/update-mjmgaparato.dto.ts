import { PartialType } from '@nestjs/mapped-types';
import { CreateMjmgaparatoDto } from './create-mjmgaparato.dto';

export class UpdateMjmgaparatoDto extends PartialType(CreateMjmgaparatoDto) {}
