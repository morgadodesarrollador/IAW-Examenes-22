import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePbfincidenciaDto } from './dto/create-pbfincidencia.dto';
import { UpdatePbfincidenciaDto } from './dto/update-pbfincidencia.dto';
import { Pbfincidencia } from './entities/pbfincidencia.entity';

@Injectable()
export class PbfincidenciasService {

  constructor(
    @InjectRepository(Pbfincidencia)
    private readonly pbfincidenciasRepository: Repository<Pbfincidencia>,
  ){
    
  }

  async create(createPbfincidenciaDto: CreatePbfincidenciaDto) {
    try {
      const incidente = this.pbfincidenciasRepository.create(createPbfincidenciaDto);
      console.log(incidente);
      await this.pbfincidenciasRepository.save(incidente);
      return incidente;

    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda')
    }
  }

  findAll() {
    return this.pbfincidenciasRepository.find({})
  }

  findOne(codigo: string) {
    return this.pbfincidenciasRepository.findOne({
      where: 
        { codigo: codigo}
    });
  }

  update(codigo: string, updatePbfincidenciaDto: UpdatePbfincidenciaDto) {
    return `This action updates a #${codigo} pbfincidencia`;
  }

  remove(codigo: string) {
    return `This action removes a #${codigo} pbfincidencia`;
  }
}
