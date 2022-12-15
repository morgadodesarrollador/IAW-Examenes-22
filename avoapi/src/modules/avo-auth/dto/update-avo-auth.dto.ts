import { PartialType } from '@nestjs/mapped-types';
import { CreateAvoAuthDto } from './create-avo-auth.dto';

export class UpdateAvoAuthDto extends PartialType(CreateAvoAuthDto) {}
