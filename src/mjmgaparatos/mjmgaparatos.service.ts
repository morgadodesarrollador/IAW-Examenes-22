import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMjmgaparatoDto } from './dto/create-mjmgaparato.dto';
import { UpdateMjmgaparatoDto } from './dto/update-mjmgaparato.dto';
import { MJMGaparato } from './entities/mjmgaparato.entity';
import aparatos from '../data/aparatos.json'

@Injectable()
export class MjmgaparatosService {

  constructor(
    @InjectRepository(MJMGaparato)
    private readonly productRepository: Repository<MJMGaparato>
  ){}

  async MJMGcreate(createMjmgaparatoDto: CreateMjmgaparatoDto) {
    try {
      const aparato = this.productRepository.create(createMjmgaparatoDto);
      await this.productRepository.save(aparato);
      return aparato;

    } catch (error) {
      throw new InternalServerErrorException('Algo no ha salido bien, el registro no ha sido añadido a la base de datos')
    }
  }

  deleteAllAparatos(){
    this.productRepository.delete({});
  }

  async MJMGseed(){
    try {
      await this.deleteAllAparatos()

      aparatos.forEach(async aparato => {
          await this.MJMGcreate(aparato);
      });
    } catch (error) {
      throw new InternalServerErrorException('Algo no ha salido bien, los datos no han sido volcados en la Base de datos')
    }
    
  }

  MJMGfindAll() {
    return this.productRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} mjmgaparato`;
  }

  update(id: number, updateMjmgaparatoDto: UpdateMjmgaparatoDto) {
    return `This action updates a #${id} mjmgaparato`;
  }

  remove(id: number) {
    return `This action removes a #${id} mjmgaparato`;
  }
}
