import { PartialType } from '@nestjs/mapped-types';
import { CreatePbfaparatoDto } from './create-pbfaparato.dto';

export class UpdatePbfaparatoDto extends PartialType(CreatePbfaparatoDto) {}
