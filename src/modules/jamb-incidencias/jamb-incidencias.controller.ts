import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JambIncidenciasService } from './jamb-incidencias.service';
import { CreateJambIncidenciaDto } from './dto/create-jamb-incidencia.dto';
import { UpdateJambIncidenciaDto } from './dto/update-jamb-incidencia.dto';

@Controller('jamb-incidencias')
export class JambIncidenciasController {
  constructor(private readonly jambIncidenciasService: JambIncidenciasService) {}

  @Post()
  create(@Body() createJambIncidenciaDto: CreateJambIncidenciaDto) {
    return this.jambIncidenciasService.create(createJambIncidenciaDto);
  }

  @Get()
  findAll() {
    return this.jambIncidenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jambIncidenciasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJambIncidenciaDto: UpdateJambIncidenciaDto) {
    return this.jambIncidenciasService.update(+id, updateJambIncidenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jambIncidenciasService.remove(+id);
  }
}
