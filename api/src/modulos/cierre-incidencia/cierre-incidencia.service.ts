import { Injectable } from '@nestjs/common';
import { CreateCierreIncidenciaDto } from './dto/create-cierre-incidencia.dto';
import { UpdateCierreIncidenciaDto } from './dto/update-cierre-incidencia.dto';

@Injectable()
export class CierreIncidenciaService {
  create(createCierreIncidenciaDto: CreateCierreIncidenciaDto) {
    return 'This action adds a new cierreIncidencia';
  }

  findAll() {
    return `This action returns all cierreIncidencia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cierreIncidencia`;
  }

  update(id: number, updateCierreIncidenciaDto: UpdateCierreIncidenciaDto) {
    return `This action updates a #${id} cierreIncidencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} cierreIncidencia`;
  }
}
