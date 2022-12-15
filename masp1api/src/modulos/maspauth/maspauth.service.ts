import { Injectable } from '@nestjs/common';
import { CreateMaspUserDto } from './dto/create-maspuser.dto';
import { UpdateMaspAuthDto } from './dto/update-maspauth.dto';

@Injectable()
export class MaspAuthService {
  create(createMaspAuthDto: CreateMaspUserDto) {
    return 'This action adds a new maspAuth';
  }

  findAll() {
    return `This action returns all maspAuth`;
  }

  findOne(idea: string) {
    return `This action returns a #${idea} maspAuth`;
  }

  update(id: number, updateMaspAuthDto: UpdateMaspAuthDto) {
    return `This action updates a #${id} maspAuth`;
  }

  remove(id: number) {
    return `This action removes a #${id} maspAuth`;
  }
}
