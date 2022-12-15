import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JlpIncidenciasService } from './jlp-incicencias.service';
import { CreateJlpIncicenciaDto } from './dto/create-jlp-incicencia.dto';
import { UpdateJlpIncicenciaDto } from './dto/update-jlp-incicencia.dto';

@Controller('jlp-incicencias')
export class JlpIncicenciasController {
  constructor(private readonly jlpIncicenciasService: JlpIncidenciasService) {}

  @Post()
  create(@Body() createJlpIncicenciaDto: CreateJlpIncicenciaDto) {
    return this.jlpIncicenciasService.create(createJlpIncicenciaDto);
  }

  @Get()
  findAll() {
    return this.jlpIncicenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jlpIncicenciasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJlpIncicenciaDto: UpdateJlpIncicenciaDto) {
    return this.jlpIncicenciasService.update(+id, updateJlpIncicenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jlpIncicenciasService.remove(+id);
  }
}
