import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JambAparatosService } from './jamb-aparatos.service';
import { CreateJambAparatoDto } from './dto/create-jamb-aparato.dto';
import { UpdateJambAparatoDto } from './dto/update-jamb-aparato.dto';

@Controller('jamb-aparatos')
export class JambAparatosController {
  constructor(private readonly jambAparatosService: JambAparatosService) {}

  @Post()
  create(@Body() createJambAparatoDto: CreateJambAparatoDto) {
    return this.jambAparatosService.create(createJambAparatoDto);
  }

  @Get()
  findAll() {
    return this.jambAparatosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jambAparatosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJambAparatoDto: UpdateJambAparatoDto) {
    return this.jambAparatosService.update(+id, updateJambAparatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jambAparatosService.remove(+id);
  }
}
