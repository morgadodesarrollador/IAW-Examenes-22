import { Injectable } from '@nestjs/common';
import { CreateJambAparatoDto } from './dto/create-jamb-aparato.dto';
import { UpdateJambAparatoDto } from './dto/update-jamb-aparato.dto';

@Injectable()
export class JambAparatosService {
  create(createJambAparatoDto: CreateJambAparatoDto) {
    return 'This action adds a new jambAparato';
  }

  findAll() {
    return `This action returns all jambAparatos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jambAparato`;
  }

  update(id: number, updateJambAparatoDto: UpdateJambAparatoDto) {
    return `This action updates a #${id} jambAparato`;
  }

  remove(id: number) {
    return `This action removes a #${id} jambAparato`;
  }
}
