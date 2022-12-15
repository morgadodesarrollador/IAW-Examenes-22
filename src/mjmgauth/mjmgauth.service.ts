import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMJMGUserDto } from './dto/create-mjmgauth.dto';
import { UpdateMjmgauthDto } from './dto/update-mjmgauth.dto';
import { MJMGUsuario } from './entities/MJMGUsuario.entity';
import usuarios from '../data/usuarios.json'

@Injectable()
export class MjmgauthService {

  constructor(
    @InjectRepository(MJMGUsuario)
    private readonly productRepository: Repository<MJMGUsuario>
  ){}
 

  async MJMGregister(createMjmgauthDto: CreateMJMGUserDto) {
    //return 'This action adds a new mjmgauth';
    try {
      const usuario = this.productRepository.create(createMjmgauthDto);
      await this.productRepository.save(usuario);
      return usuario;

    } catch (error) {
      throw new InternalServerErrorException('Algo no ha salido bien, el registro no ha sido añadido a la base de datos')
    }
  }

  async MJMGseed(){
    await this.deleteAllUser();

 
    usuarios.forEach ( async usuario => {
      await this.MJMGregister(usuario);
    });
 
   return true
  }


  deleteAllUser() {
    this.productRepository.delete({});
  }


  findAll() {
    return this.productRepository.find({});
  }

  findOne(idea: string) {
    return this.productRepository.findOneBy({idea});
  }

  update(id: number, updateMjmgauthDto: UpdateMjmgauthDto) {
    return `This action updates a #${id} mjmgauth`;
  }

  remove(id: number) {
    return `This action removes a #${id} mjmgauth`;
  }
}
