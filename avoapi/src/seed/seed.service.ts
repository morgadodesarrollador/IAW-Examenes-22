import { Injectable } from '@nestjs/common';
import { AvoAparatosService } from 'src/modules/avo-aparatos/avo-aparatos.service';
import dataAparatos from '../seed/data/aparatos.json';



@Injectable()
export class SeedService {

  constructor (
    private readonly AvoAparatosService: AvoAparatosService
  ){}

  runData() {
    this.AvoAparatosService.deleteAllAparatos();
    this.insertNewAparatos();
    return dataAparatos;
  }

  private async insertNewAparatos(){
    const insertPromises = [];
    dataAparatos.forEach ( avoaparato => {
      insertPromises.push(this.AvoAparatosService.create(avoaparato))
    })
    await Promise.all(insertPromises);
  }
}
