import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePbfauthDto } from './dto/create-pbfauth.dto';
import { UpdatePbfauthDto } from './dto/update-pbfauth.dto';
import { PbfUsuario } from './entities/PbfUsuario.entity';

@Injectable()
export class PbfauthService {

  constructor(
    @InjectRepository(PbfUsuario)
    private readonly pbfusuarioRepository: Repository<PbfUsuario>,
  ){
    
  }

  async create(createPbfusuarioDto: CreatePbfauthDto) {
    try {
      const usuario = this.pbfusuarioRepository.create(createPbfusuarioDto);
      console.log(usuario);
      await this.pbfusuarioRepository.save(usuario);
      return usuario;

    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda')
    }
  }

  findAll() {
    return this.pbfusuarioRepository.find({})
  }

  findOne(idea: string) {
    return this.pbfusuarioRepository.findOne({
      where: 
        { idea: idea}
    });
  }

  update(idea: string, updatePbfauthDto: UpdatePbfauthDto) {
    return `This action updates a #${idea} pbfauth`;
  }

  remove(idea: string) {
    return `This action removes a #${idea} pbfauth`;
  }
}
