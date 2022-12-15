import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DtgincidenciaService } from './dtgincidencia.service';
import { CreateDtgincidenciaDto } from './dto/create-dtgincidencia.dto';
import { UpdateDtgincidenciaDto } from './dto/update-dtgincidencia.dto';

@Controller('dtgincidencia')
export class DtgincidenciaController {
  constructor(private readonly dtgincidenciaService: DtgincidenciaService) {}

  @Post()
  create(@Body() createDtgincidenciaDto: CreateDtgincidenciaDto) {
    return this.dtgincidenciaService.create(createDtgincidenciaDto);
  }

  @Get()
  findAll() {
    return this.dtgincidenciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dtgincidenciaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDtgincidenciaDto: UpdateDtgincidenciaDto) {
    return this.dtgincidenciaService.update(+id, updateDtgincidenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dtgincidenciaService.remove(+id);
  }
}
