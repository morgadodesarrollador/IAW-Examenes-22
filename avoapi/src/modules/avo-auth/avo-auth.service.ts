import { Injectable } from '@nestjs/common';
import { CreateAvoAuthDto } from './dto/create-avo-auth.dto';
import { UpdateAvoAuthDto } from './dto/update-avo-auth.dto';

@Injectable()
export class AvoAuthService {
  create(createAvoAuthDto: CreateAvoAuthDto) {
    return 'This action adds a new avoAuth';
  }

  findAll() {
    return `This action returns all avoAuth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} avoAuth`;
  }

  update(id: number, updateAvoAuthDto: UpdateAvoAuthDto) {
    return `This action updates a #${id} avoAuth`;
  }

  remove(id: number) {
    return `This action removes a #${id} avoAuth`;
  }
}
