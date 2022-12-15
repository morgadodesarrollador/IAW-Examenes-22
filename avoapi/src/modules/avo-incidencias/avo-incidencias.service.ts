import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AvoAparatosService } from '../avo-aparatos/avo-aparatos.service';
import { CreateAvoIncidenciaDto } from './dto/create-avo-incidencia.dto';
import { UpdateAvoIncidenciaDto } from './dto/update-avo-incidencia.dto';
import { AvoIncidencia } from './entities/avo-incidencia.entity';

@Injectable()
export class AvoIncidenciasService {

  constructor(
    @InjectRepository(AvoIncidencia)
    private readonly idicenciasRepository: Repository<AvoIncidencia>,
    private readonly aparatosService: AvoAparatosService
  ){}

  async create(createAvoIncidenciaDto: CreateAvoIncidenciaDto) {
    try {
      const { codAvoAparato, ...camposIncidencias } = createAvoIncidenciaDto;
      const aparato = this.aparatosService.findOne(codAvoAparato);
      const incidencia = this.idicenciasRepository.create({...camposIncidencias});
      incidencia.avoaparato = aparato[0];
      await this.idicenciasRepository.save(incidencia);
      return incidencia;
    }
    catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda!')
    }
  }

  findAll() {
    return this.idicenciasRepository.find({
      
    })
  }

  findOne(codigo: string) {
    return this.idicenciasRepository.findOne({
      where: {codigo}
    })
  }

  update(id: number, updateAvoIncidenciaDto: UpdateAvoIncidenciaDto) {
    return `This action updates a #${id} avoIncidencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} avoIncidencia`;
  }
}
