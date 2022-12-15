import { PartialType } from '@nestjs/mapped-types';
import { CreateDtgaparatoDto } from './create-dtgaparato.dto';

export class UpdateDtgaparatoDto extends PartialType(CreateDtgaparatoDto) {}
