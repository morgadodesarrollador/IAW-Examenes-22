import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { MaspAuthService } from '../maspauth/maspauth.service';
// import  dataUsers  from '../seed/data/users.json'; 
import  dataClientes  from './data/usuarios.json';

@Injectable()
export class SeedService {
 
  constructor (
  //  private readonly userService: AuthService,
   private readonly clientesService: MaspAuthService 
 ){}
 
 runData(){
   this.clientesService.deleteAllClientes()
  //  this.insertNewClientes()
  //  this.userService.deleteAllUsers();
   this.insertNewClientes();
   return dataClientes;
 }
   
  

    private async insertNewClientes(){
      const insertPromises = [];
      dataClientes.forEach( cliente => {
        insertPromises.push(this.clientesService.create(cliente))
      })
      await Promise.all(insertPromises);
    }
   


}