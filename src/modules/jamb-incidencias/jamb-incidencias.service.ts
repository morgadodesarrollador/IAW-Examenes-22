import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJambIncidenciaDto } from './dto/create-jamb-incidencia.dto';
import { UpdateJambIncidenciaDto } from './dto/update-jamb-incidencia.dto';
import { JambIncidencia } from './entities/jamb-incidencia.entity';

@Injectable()
export class JambIncidenciasService {

  constructor(
    @InjectRepository(JambIncidencia)
    private readonly JambIncidenciarepository: Repository<JambIncidencia>
  ){

  }
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
