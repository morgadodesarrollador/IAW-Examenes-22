import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MjmgauthService } from './mjmgauth.service';
import { CreateMJMGUserDto } from './dto/create-mjmgauth.dto';
import { UpdateMjmgauthDto } from './dto/update-mjmgauth.dto';

@Controller('MJMGusuarios')
export class MjmgauthController {
  constructor(private readonly mjmgauthService: MjmgauthService) {}

  @Post()
  create(@Body() createMjmgauthDto: CreateMJMGUserDto) {
    return this.mjmgauthService.MJMGregister(createMjmgauthDto);
  }

  @Post("seed")
  seed(){
    return this.mjmgauthService.MJMGseed();
    return "Seed de usuarios"
  }

  @Get()
  findAll() {
    return this.mjmgauthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') idea: string) {
    return this.mjmgauthService.findOne(idea);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMjmgauthDto: UpdateMjmgauthDto) {
    return this.mjmgauthService.update(+id, updateMjmgauthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mjmgauthService.remove(+id);
  }
}
