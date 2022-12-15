import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaspaparatosService } from './maspaparatos.service';
import { CreateMaspaparatoDto } from './dto/create-maspaparato.dto';
import { UpdateMaspaparatoDto } from './dto/update-maspaparato.dto';

@Controller('maspaparatos')
export class MaspaparatosController {
  constructor(private readonly maspaparatosService: MaspaparatosService) {}

  @Post()
  create(@Body() createMaspaparatoDto: CreateMaspaparatoDto) {
    return this.maspaparatosService.create(createMaspaparatoDto);
  }

  @Get()
  findAll() {
    return this.maspaparatosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.maspaparatosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMaspaparatoDto: UpdateMaspaparatoDto) {
    return this.maspaparatosService.update(+id, updateMaspaparatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.maspaparatosService.remove(+id);
  }
}
