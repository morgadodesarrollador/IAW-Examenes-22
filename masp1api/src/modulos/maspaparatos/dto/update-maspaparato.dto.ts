import { PartialType } from '@nestjs/mapped-types';
import { CreateMaspaparatoDto } from './create-maspaparato.dto';

export class UpdateMaspaparatoDto extends PartialType(CreateMaspaparatoDto) {}
