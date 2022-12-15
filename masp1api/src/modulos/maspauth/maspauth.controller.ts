import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaspAuthService } from './maspauth.service';
import { CreateMaspUserDto } from './dto/create-maspuser.dto';
import { UpdateMaspAuthDto } from './dto/update-maspauth.dto';

@Controller('masp-auth')
export class MaspAuthController {
  constructor(private readonly maspAuthService: MaspAuthService) {}

  @Post('maspregister')
  create(@Body() createMaspUserDto: CreateMaspUserDto) {
    return this.maspAuthService.create(createMaspUserDto);
  }

  @Get()
  findAll() {
    return this.maspAuthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.maspAuthService.findOne(id);
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
