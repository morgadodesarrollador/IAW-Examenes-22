import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJmvpIncidenciaDto } from './dto/create-jmvp-incidencia.dto';
import { UpdateJmvpIncidenciaDto } from './dto/update-jmvp-incidencia.dto';
import { JmvpIncidencia } from './entities/jmvp-incidencia.entity';

@Injectable()
export class JmvpIncidenciasService {
  JmvpAparatosService: any;
  constructor(

    @InjectRepository(JmvpIncidencia)
    private readonly JmvpIncidenciaRepository: Repository<JmvpIncidencia>,

  ) {}  

  async jmvpcreate(createJmvpIncidenciaDto: CreateJmvpIncidenciaDto) {
    // return 'This action adds a new jmvpIncidencia';
    try {
      const { jmvpcod, ...campos } = createJmvpIncidenciaDto;
      const incidencia = this.JmvpIncidenciaRepository.create({ ...campos });
      incidencia.jmvpcod = await this.JmvpAparatosService.findOne( jmvpcod );
      await this.JmvpIncidenciaRepository.save( incidencia );
      return incidencia;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error en BD!')
    }

  }

  // findAll() {
  //   return `This action returns all jmvpIncidencias`;
  // }

  jmvpgetId(jmvpcodigo: string) {
    // return `This action returns a #${id} jmvpIncidencia`;
    return this.JmvpIncidenciaRepository.findOne({
      where: { 
        jmvpcodigo
      },
      relations: { 
        jmvpcod: true
      }
    });
  }

  // update(id: number, updateJmvpIncidenciaDto: UpdateJmvpIncidenciaDto) {
  //   return `This action updates a #${id} jmvpIncidencia`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} jmvpIncidencia`;
  // }
}
