import { PartialType } from '@nestjs/mapped-types';
import { CreateMJMGUserDto } from './create-mjmgauth.dto';

export class UpdateMjmgauthDto extends PartialType(CreateMJMGUserDto) {}
