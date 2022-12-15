import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JlpAparatosService } from './jlp-aparatos.service';
import { CreateJlpAparatoDto } from './dto/create-jlp-aparato.dto';
import { UpdateJlpAparatoDto } from './dto/update-jlp-aparato.dto';

@Controller('jlp-aparatos')
export class JlpAparatosController {
  constructor(private readonly jlpAparatosService: JlpAparatosService) {}

  @Post()
  create(@Body() createJlpAparatoDto: CreateJlpAparatoDto) {
    return this.jlpAparatosService.create(createJlpAparatoDto);
  }

  @Get()
  findAll() {
    return this.jlpAparatosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jlpAparatosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJlpAparatoDto: UpdateJlpAparatoDto) {
    return this.jlpAparatosService.update(+id, updateJlpAparatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jlpAparatosService.remove(+id);
  }
}
