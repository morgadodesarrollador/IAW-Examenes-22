import { PartialType } from '@nestjs/mapped-types';
import { CreateJambAuthDto } from './create-jamb-user.dto';

export class UpdateJambAuthDto extends PartialType(CreateJambAuthDto) {}
