import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMaspaparatoDto } from './dto/create-maspaparato.dto';
import { UpdateMaspaparatoDto } from './dto/update-maspaparato.dto';
import { Aparato } from './entities/maspaparato.entity';

@Injectable()
export class MaspaparatosService {
  constructor(
    @InjectRepository(Aparato)
    private readonly aparatoRepository: Repository<Aparato>
  ){

  }

  async create(createMaspAparatoDto: CreateMaspaparatoDto) {
    try {
      const aparato = this.aparatoRepository.create(createMaspAparatoDto);
      console.log(aparato);
      await this.aparatoRepository.save(aparato);
      return aparato;

    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda')
    }
  }

  findAll() {
    return this.aparatoRepository.find({});
  }

  findOne(cod: string) {
    return this.aparatoRepository.findOne({
      where: { 
        cod 
      },
      relations: {
          incicencias: true,
      }
    });
  }

  update(id: number, updateMaspaparatoDto: UpdateMaspaparatoDto) {
    return `This action updates a #${id} maspaparato`;
  }

  remove(id: number) {
    return `This action removes a #${id} maspaparato`;
  }
}
