import { Injectable } from '@nestjs/common';
import { CreateJlpIncicenciaDto } from './dto/create-jlp-incicencia.dto';
import { UpdateJlpIncicenciaDto } from './dto/update-jlp-incicencia.dto';

@Injectable()
export class JlpIncicenciasService {
  create(createJlpIncicenciaDto: CreateJlpIncicenciaDto) {
    return 'This action adds a new jlpIncicencia';
  }

  findAll() {
    return `This action returns all jlpIncicencias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jlpIncicencia`;
  }

  update(id: number, updateJlpIncicenciaDto: UpdateJlpIncicenciaDto) {
    return `This action updates a #${id} jlpIncicencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} jlpIncicencia`;
  }
}
