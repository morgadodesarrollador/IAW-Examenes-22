import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvoAparatosService } from './avo-aparatos.service';
import { CreateAvoAparatoDto } from './dto/create-avo-aparato.dto';
import { UpdateAvoAparatoDto } from './dto/update-avo-aparato.dto';

@Controller('avo-aparatos')
export class AvoAparatosController {
  constructor(private readonly avoAparatosService: AvoAparatosService) {}

  @Post()
  create(@Body() createAvoAparatoDto: CreateAvoAparatoDto) {
    return this.avoAparatosService.create(createAvoAparatoDto);
  }

  @Get()
  findAll() {
    return this.avoAparatosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avoAparatosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvoAparatoDto: UpdateAvoAparatoDto) {
    return this.avoAparatosService.update(+id, updateAvoAparatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avoAparatosService.remove(+id);
  }
}
