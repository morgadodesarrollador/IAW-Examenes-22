import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaspincidenciasService } from './maspincidencias.service';
import { CreateMaspincidenciaDto } from './dto/create-maspincidencia.dto';
import { UpdateMaspincidenciaDto } from './dto/update-maspincidencia.dto';

@Controller('maspincidencias')
export class MaspincidenciasController {
  constructor(private readonly maspincidenciasService: MaspincidenciasService) {}

  @Post()
  create(@Body() createMaspincidenciaDto: CreateMaspincidenciaDto) {
    return this.maspincidenciasService.create(createMaspincidenciaDto);
  }

  @Get()
  findAll() {
    return this.maspincidenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.maspincidenciasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMaspincidenciaDto: UpdateMaspincidenciaDto) {
    return this.maspincidenciasService.update(+id, updateMaspincidenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.maspincidenciasService.remove(+id);
  }
}
