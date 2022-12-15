import { Injectable } from '@nestjs/common';
import { CreateJlpAparatoDto } from './dto/create-jlp-aparato.dto';
import { UpdateJlpAparatoDto } from './dto/update-jlp-aparato.dto';

@Injectable()
export class JlpAparatosService {
  create(createJlpAparatoDto: CreateJlpAparatoDto) {
    return 'This action adds a new jlpAparato';
  }

  findAll() {
    return `This action returns all jlpAparatos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jlpAparato`;
  }

  update(id: number, updateJlpAparatoDto: UpdateJlpAparatoDto) {
    return `This action updates a #${id} jlpAparato`;
  }

  remove(id: number) {
    return `This action removes a #${id} jlpAparato`;
  }
}
