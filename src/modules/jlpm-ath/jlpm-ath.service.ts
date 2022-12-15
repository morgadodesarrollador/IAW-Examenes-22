import { Injectable } from '@nestjs/common';
import { CreateJlpmAthDto } from './dto/create-jlpm-ath.dto';
import { UpdateJlpmAthDto } from './dto/update-jlpm-ath.dto';

@Injectable()
export class JlpmAthService {
  create(createJlpmAthDto: CreateJlpmAthDto) {
    return 'This action adds a new jlpmAth';
  }

  findAll() {
    return `This action returns all jlpmAth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jlpmAth`;
  }

  update(id: number, updateJlpmAthDto: UpdateJlpmAthDto) {
    return `This action updates a #${id} jlpmAth`;
  }

  remove(id: number) {
    return `This action removes a #${id} jlpmAth`;
  }
}
