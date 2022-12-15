import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAvoAparatoDto } from './dto/create-avo-aparato.dto';
import { UpdateAvoAparatoDto } from './dto/update-avo-aparato.dto';
import { AvoAparato } from './entities/avo-aparato.entity';

@Injectable()
export class AvoAparatosService {

  constructor(
    @InjectRepository(AvoAparato)
    private readonly aparatosRepository: Repository<AvoAparato>
  ){}

  async create(createAvoAparatoDto: CreateAvoAparatoDto) {
    try {
      const aparato = this.aparatosRepository.create(createAvoAparatoDto);
      await this.aparatosRepository.save(aparato);
      return aparato;
    }
    catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda!')
    }
  }

  findAll() {
    return this.aparatosRepository.find({});
  }

  findOne(cod: string) {
    return this.aparatosRepository.findOne({
      where: {cod}
    })
  }

  update(id: number, updateAvoAparatoDto: UpdateAvoAparatoDto) {
    return `This action updates a #${id} avoAparato`;
  }

  remove(id: number) {
    return `This action removes a #${id} avoAparato`;
  }

  async deleteAllAparatos(){
    const query = this.aparatosRepository.createQueryBuilder('avoaparato');
    try {
      return await query
        .delete()
        .where({})
        .execute()
    }
    catch(error){
      this.handleDBErrors (error)
    }
  }

  private handleDBErrors (error: any): never{
    if (error.code === '23505')
      throw new BadRequestException(error.detail)
    throw new InternalServerErrorException('Please Check Server Error...')
  }
}
