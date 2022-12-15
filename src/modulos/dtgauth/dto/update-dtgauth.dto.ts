import { PartialType } from '@nestjs/mapped-types';
import { CrearDtgUsuarioDto } from './create-dtgauth.dto';

export class UpdateDtgauthDto extends PartialType(CrearDtgUsuarioDto) {}
