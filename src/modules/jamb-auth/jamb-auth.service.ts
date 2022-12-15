import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJambAuthDto } from './dto/create-jamb-user.dto';
import { UpdateJambAuthDto } from './dto/update-jamb-auth.dto';
import { JambUsuario } from './entities/jamb-Usuario.entity';

@Injectable()
export class JambAuthService {

  constructor(
    @InjectRepository(JambUsuario)
    private readonly JambUsuariopository: Repository<JambUsuario>
  ){

  }
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
