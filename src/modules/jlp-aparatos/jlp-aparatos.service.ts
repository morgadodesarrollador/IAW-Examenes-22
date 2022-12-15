import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJlpAparatoDto } from './dto/create-jlp-aparato.dto';
import { UpdateJlpAparatoDto } from './dto/update-jlp-aparato.dto';
import { Aparato } from './entities/jlp-aparato.entity';

@Injectable()
export class JlpAparatosService {
  
  constructor(
    @InjectRepository(Aparato)
    private readonly aparatoRepository: Repository<Aparato>
  ){
    
  }

  async create(createJlpAparatoDto: CreateJlpAparatoDto) {
    try {
      const aparato = this.aparatoRepository.create(createJlpAparatoDto);
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

  update(id: number, updateJlpAparatoDto: UpdateJlpAparatoDto) {
    return `This action updates a #${id} jlpAparato`;
  }

  remove(id: number) {
    return `This action removes a #${id} jlpAparato`;
  }
}
