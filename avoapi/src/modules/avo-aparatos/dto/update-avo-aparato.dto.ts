import { PartialType } from '@nestjs/mapped-types';
import { CreateAvoAparatoDto } from './create-avo-aparato.dto';

export class UpdateAvoAparatoDto extends PartialType(CreateAvoAparatoDto) {}
