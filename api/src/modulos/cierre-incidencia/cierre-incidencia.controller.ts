import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CierreIncidenciaService } from './cierre-incidencia.service';
import { CreateCierreIncidenciaDto } from './dto/create-cierre-incidencia.dto';
import { UpdateCierreIncidenciaDto } from './dto/update-cierre-incidencia.dto';

@Controller('cierre-incidencia')
export class CierreIncidenciaController {
  constructor(private readonly cierreIncidenciaService: CierreIncidenciaService) {}

  @Post()
  create(@Body() createCierreIncidenciaDto: CreateCierreIncidenciaDto) {
    return this.cierreIncidenciaService.create(createCierreIncidenciaDto);
  }

  @Get()
  findAll() {
    return this.cierreIncidenciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cierreIncidenciaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCierreIncidenciaDto: UpdateCierreIncidenciaDto) {
    return this.cierreIncidenciaService.update(+id, updateCierreIncidenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cierreIncidenciaService.remove(+id);
  }
}
