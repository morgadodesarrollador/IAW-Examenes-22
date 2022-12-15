import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DtgaparatoService } from './dtgaparato.service';
import { CreateDtgaparatoDto } from './dto/create-dtgaparato.dto';
import { UpdateDtgaparatoDto } from './dto/update-dtgaparato.dto';

@Controller('dtgaparato')
export class DtgaparatoController {
  constructor(private readonly dtgaparatoService: DtgaparatoService) {}

  @Post()
  create(@Body() createDtgaparatoDto: CreateDtgaparatoDto) {
    return this.dtgaparatoService.create(createDtgaparatoDto);
  }

  @Get()
  findAll() {
    return this.dtgaparatoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dtgaparatoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDtgaparatoDto: UpdateDtgaparatoDto) {
    return this.dtgaparatoService.update(+id, updateDtgaparatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dtgaparatoService.remove(+id);
  }
}
