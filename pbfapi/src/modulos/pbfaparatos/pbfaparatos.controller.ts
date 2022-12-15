import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PbfaparatosService } from './pbfaparatos.service';
import { CreatePbfaparatoDto } from './dto/create-pbfaparato.dto';
import { UpdatePbfaparatoDto } from './dto/update-pbfaparato.dto';

@Controller('pbfaparatos')
export class PbfaparatosController {
  constructor(private readonly pbfaparatosService: PbfaparatosService) {}

  @Post()
  create(@Body() createPbfaparatoDto: CreatePbfaparatoDto) {
    return this.pbfaparatosService.create(createPbfaparatoDto);
  }

  @Get()
  findAll() {
    return this.pbfaparatosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pbfaparatosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePbfaparatoDto: UpdatePbfaparatoDto) {
    return this.pbfaparatosService.update(+id, updatePbfaparatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pbfaparatosService.remove(+id);
  }
}
