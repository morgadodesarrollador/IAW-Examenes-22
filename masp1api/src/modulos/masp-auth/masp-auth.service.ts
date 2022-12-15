import { Injectable } from '@nestjs/common';
import { CreateMaspAuthDto } from './dto/create-masp-auth.dto';
import { UpdateMaspAuthDto } from './dto/update-masp-auth.dto';

@Injectable()
export class MaspAuthService {
  create(createMaspAuthDto: CreateMaspAuthDto) {
    return 'This action adds a new maspAuth';
  }

  findAll() {
    return `This action returns all maspAuth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} maspAuth`;
  }

  update(id: number, updateMaspAuthDto: UpdateMaspAuthDto) {
    return `This action updates a #${id} maspAuth`;
  }

  remove(id: number) {
    return `This action removes a #${id} maspAuth`;
  }
}
