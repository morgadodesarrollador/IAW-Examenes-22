import { PartialType } from '@nestjs/mapped-types';
import { CreateMaspAuthDto } from './create-masp-auth.dto';

export class UpdateMaspAuthDto extends PartialType(CreateMaspAuthDto) {}
