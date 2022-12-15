import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMjmgindicenciaDto } from './dto/create-mjmgindicencia.dto';
import { UpdateMjmgindicenciaDto } from './dto/update-mjmgindicencia.dto';
import { MJMGincidencia } from './entities/mjmgindicencia.entity';

@Injectable()
export class MjmgindicenciasService {

  constructor(
    @InjectRepository(MJMGincidencia)
    private readonly productRepository: Repository<MJMGincidencia>
  ){}

  async MJMGcreate(createMjmgindicenciaDto: CreateMjmgindicenciaDto) {
    try {
      const aparato = this.productRepository.create(createMjmgindicenciaDto);
      await this.productRepository.save(aparato);
      return aparato;

    } catch (error) {
      throw new InternalServerErrorException('Algo no ha salido bien, el registro no ha sido añadido a la base de datos')
    }
  }

  findAll() {
    return `This action returns all mjmgindicencias`;
  }

  MJMGgetId(id: string) {
    return this.productRepository.findOneBy({id});
  }

  update(id: number, updateMjmgindicenciaDto: UpdateMjmgindicenciaDto) {
    return `This action updates a #${id} mjmgindicencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} mjmgindicencia`;
  }
}
