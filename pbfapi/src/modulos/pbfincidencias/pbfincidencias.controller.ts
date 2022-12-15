import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PbfincidenciasService } from './pbfincidencias.service';
import { CreatePbfincidenciaDto } from './dto/create-pbfincidencia.dto';
import { UpdatePbfincidenciaDto } from './dto/update-pbfincidencia.dto';

@Controller('pbfincidencias')
export class PbfincidenciasController {
  constructor(private readonly pbfincidenciasService: PbfincidenciasService) {}

  @Post('pbfregister')
  create(@Body() createPbfincidenciaDto: CreatePbfincidenciaDto) {
    return this.pbfincidenciasService.create(createPbfincidenciaDto);
  }

  @Get('pbflist')
  findAll() {
    return this.pbfincidenciasService.findAll();
  }

  @Get('pbfgetid/:codigo')
  findOne(@Param('codigo') codigo: string) {
    return this.pbfincidenciasService.findOne(codigo);
  }

  @Patch(':codigo')
  update(@Param('codigo') codigo: string, @Body() updatePbfincidenciaDto: UpdatePbfincidenciaDto) {
    return this.pbfincidenciasService.update(codigo, updatePbfincidenciaDto);
  }

  @Delete(':codigo')
  remove(@Param('codigo') codigo: string) {
    return this.pbfincidenciasService.remove(codigo);
  }
}
