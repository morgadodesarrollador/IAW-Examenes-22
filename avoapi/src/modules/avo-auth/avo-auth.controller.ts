import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvoAuthService } from './avo-auth.service';
import { CreateAvoAuthDto } from './dto/create-avo-auth.dto';
import { UpdateAvoAuthDto } from './dto/update-avo-auth.dto';

@Controller('avo-auth')
export class AvoAuthController {
  constructor(private readonly avoAuthService: AvoAuthService) {}

  @Post()
  create(@Body() createAvoAuthDto: CreateAvoAuthDto) {
    return this.avoAuthService.create(createAvoAuthDto);
  }

  @Get()
  findAll() {
    return this.avoAuthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avoAuthService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvoAuthDto: UpdateAvoAuthDto) {
    return this.avoAuthService.update(+id, updateAvoAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avoAuthService.remove(+id);
  }
}
