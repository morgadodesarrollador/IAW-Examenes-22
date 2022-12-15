import { PartialType } from '@nestjs/mapped-types';
import { CreateMaspUserDto } from './create-maspuser.dto';

export class UpdateMaspAuthDto extends PartialType(CreateMaspUserDto) {}
