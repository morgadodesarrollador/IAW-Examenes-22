import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MjmgaparatosService } from './mjmgaparatos.service';
import { CreateMjmgaparatoDto } from './dto/create-mjmgaparato.dto';
import { UpdateMjmgaparatoDto } from './dto/update-mjmgaparato.dto';

@Controller('MJMGaparatos')
export class MjmgaparatosController {
  constructor(private readonly mjmgaparatosService: MjmgaparatosService) {}

  @Post()
  create(@Body() createMjmgaparatoDto: CreateMjmgaparatoDto) {
    return this.mjmgaparatosService.MJMGcreate(createMjmgaparatoDto);
  }

  @Get()
  findAll() {
    return this.mjmgaparatosService.MJMGfindAll();
  }

  @Post()
  seed() {
    this.mjmgaparatosService.MJMGseed();
    return "Archivo json volcado adecuadamente"
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mjmgaparatosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMjmgaparatoDto: UpdateMjmgaparatoDto) {
    return this.mjmgaparatosService.update(+id, updateMjmgaparatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mjmgaparatosService.remove(+id);
  }
}
