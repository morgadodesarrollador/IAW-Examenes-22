import { Injectable } from '@nestjs/common';
import { CreateDtgincidenciaDto } from './dto/create-dtgincidencia.dto';
import { UpdateDtgincidenciaDto } from './dto/update-dtgincidencia.dto';

@Injectable()
export class DtgincidenciaService {
  create(createDtgincidenciaDto: CreateDtgincidenciaDto) {
    return 'This action adds a new dtgincidencia';
  }

  findAll() {
    return `This action returns all dtgincidencia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dtgincidencia`;
  }

  update(id: number, updateDtgincidenciaDto: UpdateDtgincidenciaDto) {
    return `This action updates a #${id} dtgincidencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} dtgincidencia`;
  }
}
