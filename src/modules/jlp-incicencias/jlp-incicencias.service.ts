import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JlpAparatosService } from '../jlp-aparatos/jlp-aparatos.service';
import { JlpmAthService } from '../jlpm-ath/jlpm-ath.service';
import { CreateJlpIncicenciaDto } from './dto/create-jlp-incicencia.dto';
import { UpdateJlpIncicenciaDto } from './dto/update-jlp-incicencia.dto';
import { Incicencia } from './entities/jlp-incicencia.entity';

@Injectable()
export class JlpIncidenciasService {
  
  constructor(
    @InjectRepository(Incicencia)
    private readonly incidenciaRepository: Repository<Incicencia>,
    private readonly jlpAparatosService: JlpAparatosService,
    private readonly jlpmAthService: JlpmAthService
  ){

  }

  async create(createJlpIncicenciaDto: CreateJlpIncicenciaDto) {
    try {
     
      const { codAp,idea, ...campos } = createJlpIncicenciaDto;
      // console.log({...campos});
      const aparato = this.jlpAparatosService.findOne(codAp);
      const usuario = this.jlpmAthService.findOne(idea);
      const incidencia = this.incidenciaRepository.create({...campos});
      incidencia.aparato = await this.jlpAparatosService.findOne(codAp);
      incidencia.usuario = await this.jlpmAthService.findOne(idea);
      
      await this.incidenciaRepository.save(incidencia)
      return incidencia
    } catch (error) {
        return new InternalServerErrorException('Error en BD')
    }
  }

  findAll() {
    return `This action returns all jlpIncicencias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jlpIncicencia`;
  }

  update(id: number, updateJlpIncicenciaDto: UpdateJlpIncicenciaDto) {
    return `This action updates a #${id} jlpIncicencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} jlpIncicencia`;
  }
}
