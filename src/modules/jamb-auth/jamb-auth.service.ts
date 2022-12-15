import { Injectable } from '@nestjs/common';
import { CreateJambAuthDto } from './dto/create-jamb-user.dto';
import { UpdateJambAuthDto } from './dto/update-jamb-auth.dto';

@Injectable()
export class JambAuthService {
  create(createJambAuthDto: CreateJambAuthDto) {
    return 'This action adds a new jambAuth';
  }

  findAll() {
    return `This action returns all jambAuth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jambAuth`;
  }

  update(id: number, updateJambAuthDto: UpdateJambAuthDto) {
    return `This action updates a #${id} jambAuth`;
  }

  remove(id: number) {
    return `This action removes a #${id} jambAuth`;
  }
}
