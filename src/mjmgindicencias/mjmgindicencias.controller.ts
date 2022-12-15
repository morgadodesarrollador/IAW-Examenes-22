import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MjmgindicenciasService } from './mjmgindicencias.service';
import { CreateMjmgindicenciaDto } from './dto/create-mjmgindicencia.dto';
import { UpdateMjmgindicenciaDto } from './dto/update-mjmgindicencia.dto';

@Controller('mjmgindicencias')
export class MjmgindicenciasController {
  constructor(private readonly mjmgindicenciasService: MjmgindicenciasService) {}

  @Post()
  create(@Body() createMjmgindicenciaDto: CreateMjmgindicenciaDto) {
    return this.mjmgindicenciasService.create(createMjmgindicenciaDto);
  }

  @Get()
  findAll() {
    return this.mjmgindicenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mjmgindicenciasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMjmgindicenciaDto: UpdateMjmgindicenciaDto) {
    return this.mjmgindicenciasService.update(+id, updateMjmgindicenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mjmgindicenciasService.remove(+id);
  }
}
