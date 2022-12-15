import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvoIncidenciasService } from './avo-incidencias.service';
import { CreateAvoIncidenciaDto } from './dto/create-avo-incidencia.dto';
import { UpdateAvoIncidenciaDto } from './dto/update-avo-incidencia.dto';

@Controller('avo-incidencias')
export class AvoIncidenciasController {
  constructor(private readonly avoIncidenciasService: AvoIncidenciasService) {}

  @Post()
  create(@Body() createAvoIncidenciaDto: CreateAvoIncidenciaDto) {
    return this.avoIncidenciasService.create(createAvoIncidenciaDto);
  }

  @Get()
  findAll() {
    return this.avoIncidenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avoIncidenciasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvoIncidenciaDto: UpdateAvoIncidenciaDto) {
    return this.avoIncidenciasService.update(+id, updateAvoIncidenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avoIncidenciasService.remove(+id);
  }
}
