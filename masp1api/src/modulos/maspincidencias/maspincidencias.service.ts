import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaspaparatosService } from '../maspaparatos/maspaparatos.service';
import { Usuario } from '../maspauth/entities/maspUsuario.entity';
import { MaspAuthService } from '../maspauth/maspauth.service';
import { CreateMaspincidenciaDto } from './dto/create-maspincidencia.dto';
import { UpdateMaspincidenciaDto } from './dto/update-maspincidencia.dto';
import { Incidencia } from './entities/maspincidencia.entity';

@Injectable()
export class MaspincidenciasService {
  constructor(
    @InjectRepository(Incidencia)
    private readonly incidenciasRepository: Repository<Incidencia>,
    private readonly maspaparatosService: MaspaparatosService,
    private readonly maspAuthService: MaspAuthService,
  ){

  }

  async create(createMaspincidenciaDto: CreateMaspincidenciaDto) {
    try {

      const { codAp,idea, ...campos } = createMaspincidenciaDto;
      // console.log({...campos});
      const aparato = this.maspaparatosService.findOne(codAp);
      const usuario = this.maspAuthService.findOne(idea);
      const incidencia = this.incidenciasRepository.create({...campos});
      incidencia.aparato = await this.maspaparatosService.findOne(codAp);
      incidencia.usuario = await this.maspAuthService.findOne(idea);
      // //se lanza la petición sl SGBD (postgres). Esperar (x seg)
      await this.incidenciasRepository.save(incidencia)
      return incidencia
    } catch (error) {
        return new InternalServerErrorException('Error en BD')
    }
  }

  findAll() {
    return `This action returns all maspincidencias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} maspincidencia`;
  }

  update(id: number, updateMaspincidenciaDto: UpdateMaspincidenciaDto) {
    return `This action updates a #${id} maspincidencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} maspincidencia`;
  }
}
