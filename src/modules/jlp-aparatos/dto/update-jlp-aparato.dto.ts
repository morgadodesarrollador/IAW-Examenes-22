import { PartialType } from '@nestjs/mapped-types';
import { CreateJlpAparatoDto } from './create-jlp-aparato.dto';

export class UpdateJlpAparatoDto extends PartialType(CreateJlpAparatoDto) {}
