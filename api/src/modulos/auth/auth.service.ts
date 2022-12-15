import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
import { CreateUserDto, UpdateUserDto, LoginUserDto } from './dto/index';
=======
import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto/index';
>>>>>>> 3dc687912534c171bb39230e473048f0de560050


@Injectable()
export class AuthService {
  create(createAuthDto: CreateUserDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateUserDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
