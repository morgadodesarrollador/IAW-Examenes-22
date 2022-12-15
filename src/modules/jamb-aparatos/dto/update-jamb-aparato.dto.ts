import { PartialType } from '@nestjs/mapped-types';
import { CreateJambAparatoDto } from './create-jamb-aparato.dto';

export class UpdateJambAparatoDto extends PartialType(CreateJambAparatoDto) {}
