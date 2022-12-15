import { Injectable } from '@nestjs/common';
import { CreatePbfaparatoDto } from './dto/create-pbfaparato.dto';
import { UpdatePbfaparatoDto } from './dto/update-pbfaparato.dto';

@Injectable()
export class PbfaparatosService {
  create(createPbfaparatoDto: CreatePbfaparatoDto) {
    return 'This action adds a new pbfaparato';
  }

  findAll() {
    return `This action returns all pbfaparatos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pbfaparato`;
  }

  update(id: number, updatePbfaparatoDto: UpdatePbfaparatoDto) {
    return `This action updates a #${id} pbfaparato`;
  }

  remove(id: number) {
    return `This action removes a #${id} pbfaparato`;
  }
}
