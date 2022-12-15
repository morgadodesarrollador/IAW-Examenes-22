import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaspAuthService } from './masp-auth.service';
import { CreateMaspAuthDto } from './dto/create-masp-auth.dto';
import { UpdateMaspAuthDto } from './dto/update-masp-auth.dto';

@Controller('masp-auth')
export class MaspAuthController {
  constructor(private readonly maspAuthService: MaspAuthService) {}

  @Post()
  create(@Body() createMaspAuthDto: CreateMaspAuthDto) {
    return this.maspAuthService.create(createMaspAuthDto);
  }

  @Get()
  findAll() {
    return this.maspAuthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.maspAuthService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMaspAuthDto: UpdateMaspAuthDto) {
    return this.maspAuthService.update(+id, updateMaspAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.maspAuthService.remove(+id);
  }
}
