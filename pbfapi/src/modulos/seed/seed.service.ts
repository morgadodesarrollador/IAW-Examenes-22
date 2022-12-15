import { Injectable } from '@nestjs/common';
import { PbfauthService } from '../pbfauth/pbfauth.service';
import dataUser from '../seed/data/usuarios.json';
import dataAparato from '../seed/data/aparatos.json';

@Injectable()
export class SeedService {

  constructor (
    private readonly pbfauthService: PbfauthService
  ) {

  }

  runData() {
    this.pbfauthService.deleteAllUser()
    this.insertNewUser();
    return dataUser;
  }

  private async insertNewUser() {
    const insertPromises = [];
    dataAparato.forEach( cliente => {
      insertPromises.push(this.pbfauthService.create(cliente[0]))
    })
    await Promise.all(insertPromises);
  }

}
