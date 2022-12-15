import { PartialType } from '@nestjs/mapped-types';
import { CreateJlpmAthDto } from './create-jlpm-ath.dto';

export class UpdateJlpmAthDto extends PartialType(CreateJlpmAthDto) {}
