import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJlpmAthDto } from './dto/create-jlpm-ath.dto';
import { UpdateJlpmAthDto } from './dto/update-jlpm-ath.dto';
import { Usuario } from './entities/jlpm-Usuario.entity';

@Injectable()
export class JlpmAthService {
  
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>
  ){
    
  }

  async create(createJlpmAthDto: CreateJlpmAthDto) {
    try {
      const aparato = this.usuarioRepository.create(createJlpmAthDto);
      console.log(aparato);
      await this.usuarioRepository.save(aparato);
      return aparato;

    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda')
    }
  }

  findAll() {
    return this.usuarioRepository.find({});
  }

  findOne(idea: string) {
    return this.usuarioRepository.findOne({
      where: { 
        idea 
      },
      relations: {
          incidencias: true,
      }
    });
  }

 

  update(id: number, updateJlpmAthDto: UpdateJlpmAthDto) {
    return `This action updates a #${id} jlpmAth`;
  }

  remove(id: number) {
    return `This action removes a #${id} jlpmAth`;
  }
}
