import { PartialType } from '@nestjs/mapped-types';
import { CreatePbfauthDto } from './create-pbfauth.dto';

export class UpdatePbfauthDto extends PartialType(CreatePbfauthDto) {}
