import { Injectable } from '@nestjs/common';
import { CreateAparatoDto } from './dto/create-aparato.dto';
import { UpdateAparatoDto } from './dto/update-aparato.dto';

@Injectable()
export class AparatosService {
  create(createAparatoDto: CreateAparatoDto) {
    return 'This action adds a new aparato';
  }

  findAll() {
    return `This action returns all aparatos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aparato`;
  }

  update(id: number, updateAparatoDto: UpdateAparatoDto) {
    return `This action updates a #${id} aparato`;
  }

  remove(id: number) {
    return `This action removes a #${id} aparato`;
  }
}
