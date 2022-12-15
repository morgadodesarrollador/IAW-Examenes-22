import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePbfincidenciaDto } from './dto/create-pbfincidencia.dto';
import { UpdatePbfincidenciaDto } from './dto/update-pbfincidencia.dto';
import { Pbfincidencia } from './entities/pbfincidencia.entity';

@Injectable()
export class PbfincidenciasService {

  // constructor(
  //   @InjectRepository(Pbfincidencia)
  //   private readonly pbfincidenciasRepository: Repository<Pbfincidencia>,
  // ){
    
  // }

  async create(createPbfincidenciaDto: CreatePbfincidenciaDto) {
    // try {
    //   const cliente = this.pbfincidenciasRepository.create(createPbfincidenciaDto);
    //   console.log(cliente);
    //   await this.pbfincidenciasRepository.save(cliente);
    //   return cliente;

    // } catch (error) {
    //   console.log(error);
    //   throw new InternalServerErrorException('Ayuda')
    // }
    return `prueba`;
  }

  findAll() {
    return `This action returns all pbfincidencias`;
  }

  findOne(codigo: string) {
    return `This action returns a #${codigo} pbfincidencia`;
  }

  update(codigo: string, updatePbfincidenciaDto: UpdatePbfincidenciaDto) {
    return `This action updates a #${codigo} pbfincidencia`;
  }

  remove(codigo: string) {
    return `This action removes a #${codigo} pbfincidencia`;
  }
}
