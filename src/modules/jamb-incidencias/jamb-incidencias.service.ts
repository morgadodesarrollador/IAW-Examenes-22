import { Injectable } from '@nestjs/common';
import { CreateJambIncidenciaDto } from './dto/create-jamb-incidencia.dto';
import { UpdateJambIncidenciaDto } from './dto/update-jamb-incidencia.dto';

@Injectable()
export class JambIncidenciasService {
  create(createJambIncidenciaDto: CreateJambIncidenciaDto) {
    return 'This action adds a new jambIncidencia';
  }

  findAll() {
    return `This action returns all jambIncidencias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jambIncidencia`;
  }

  update(id: number, updateJambIncidenciaDto: UpdateJambIncidenciaDto) {
    return `This action updates a #${id} jambIncidencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} jambIncidencia`;
  }
}
