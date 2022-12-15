import { Injectable } from '@nestjs/common';
import { CrearDtgUsuarioDto } from './dto/create-dtgauth.dto';
import { UpdateDtgauthDto } from './dto/update-dtgauth.dto';

@Injectable()
export class DtgauthService {
  create(createDtgauthDto: CrearDtgUsuarioDto) {
    return 'This action adds a new dtgauth';
  }

  findAll() {
    return `This action returns all dtgauth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dtgauth`;
  }

  update(id: number, updateDtgauthDto: UpdateDtgauthDto) {
    return `This action updates a #${id} dtgauth`;
  }

  remove(id: number) {
    return `This action removes a #${id} dtgauth`;
  }
}
