import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePbfaparatoDto } from './dto/create-pbfaparato.dto';
import { UpdatePbfaparatoDto } from './dto/update-pbfaparato.dto';
import { Pbfaparato } from './entities/pbfaparato.entity';

@Injectable()
export class PbfaparatosService {

  constructor(
    @InjectRepository(Pbfaparato)
    private readonly pbfaparatosRepository: Repository<Pbfaparato>,
  ){
    
  }

  async create(createPbfaparatoDto: CreatePbfaparatoDto) {
    try {
      const aparato = this.pbfaparatosRepository.create(createPbfaparatoDto);
      console.log(aparato);
      await this.pbfaparatosRepository.save(aparato);
      return aparato;

    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda')
    }
  }

  findAll() {
    return this.pbfaparatosRepository.find({})
  }

  findOne(cod: string) {
    return this.pbfaparatosRepository.findOne({
      where: 
        { cod: cod}
    });
  }

  update(cod: string, updatePbfaparatoDto: UpdatePbfaparatoDto) {
    return `This action updates a #${cod} pbfaparato`;
  }

  remove(cod: string) {
    return `This action removes a #${cod} pbfaparato`;
  }
}
