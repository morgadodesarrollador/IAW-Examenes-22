import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PbfaparatosService } from './pbfaparatos.service';
import { CreatePbfaparatoDto } from './dto/create-pbfaparato.dto';
import { UpdatePbfaparatoDto } from './dto/update-pbfaparato.dto';

@Controller('pbfaparatos')
export class PbfaparatosController {
  constructor(private readonly pbfaparatosService: PbfaparatosService) {}

  @Post('pbfregister')
  create(@Body() createPbfaparatoDto: CreatePbfaparatoDto) {
    return this.pbfaparatosService.create(createPbfaparatoDto);
  }

  @Get()
  findAll() {
    return this.pbfaparatosService.findAll();
  }

  @Get('pbfgetid/:cod')
  findOne(@Param('cod') cod: string) {
    return this.pbfaparatosService.findOne(cod);
  }

  @Patch(':cod')
  update(@Param('cod') cod: string, @Body() updatePbfaparatoDto: UpdatePbfaparatoDto) {
    return this.pbfaparatosService.update(cod, updatePbfaparatoDto);
  }

  @Delete(':cod')
  remove(@Param('cod') cod: string) {
    return this.pbfaparatosService.remove(cod);
  }
}
