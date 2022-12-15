import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DtgauthService } from './dtgauth.service';
import { CrearDtgUsuarioDto } from './dto/create-dtgauth.dto';
import { UpdateDtgauthDto } from './dto/update-dtgauth.dto';

@Controller('dtgauth')
export class DtgauthController {
  constructor(private readonly dtgauthService: DtgauthService) {}

  @Post()
  create(@Body() createDtgauthDto: CrearDtgUsuarioDto) {
    return this.dtgauthService.create(createDtgauthDto);
  }

  @Get()
  findAll() {
    return this.dtgauthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dtgauthService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDtgauthDto: UpdateDtgauthDto) {
    return this.dtgauthService.update(+id, updateDtgauthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dtgauthService.remove(+id);
  }
}
