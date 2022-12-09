import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoMaterialService } from './tipo-material.service';
import { CreateTipoMaterialDto } from './dto/create-tipo-material.dto';
import { UpdateTipoMaterialDto } from './dto/update-tipo-material.dto';

@Controller('tipo-material')
export class TipoMaterialController {
  constructor(private readonly tipoMaterialService: TipoMaterialService) {}

  @Post()
  create(@Body() createTipoMaterialDto: CreateTipoMaterialDto) {
    return this.tipoMaterialService.create(createTipoMaterialDto);
  }

  @Get()
  findAll() {
    return this.tipoMaterialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoMaterialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoMaterialDto: UpdateTipoMaterialDto) {
    return this.tipoMaterialService.update(+id, updateTipoMaterialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoMaterialService.remove(+id);
  }
}
