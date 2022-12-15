import { Injectable } from '@nestjs/common';
import { CreateDtgaparatoDto } from './dto/create-dtgaparato.dto';
import { UpdateDtgaparatoDto } from './dto/update-dtgaparato.dto';

@Injectable()
export class DtgaparatoService {
  create(createDtgaparatoDto: CreateDtgaparatoDto) {
    return 'This action adds a new dtgaparato';
  }

  findAll() {
    return `This action returns all dtgaparato`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dtgaparato`;
  }

  update(id: number, updateDtgaparatoDto: UpdateDtgaparatoDto) {
    return `This action updates a #${id} dtgaparato`;
  }

  remove(id: number) {
    return `This action removes a #${id} dtgaparato`;
  }
}
