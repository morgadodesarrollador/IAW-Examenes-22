import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JlpmAthService } from './jlpm-ath.service';
import { CreateJlpmAthDto } from './dto/create-jlpm-ath.dto';
import { UpdateJlpmAthDto } from './dto/update-jlpm-ath.dto';

@Controller('jlpm-ath')
export class JlpmAthController {
  constructor(private readonly jlpmAthService: JlpmAthService) {}

  @Post('register')
  create(@Body() createJlpmAthDto: CreateJlpmAthDto) {
    return this.jlpmAthService.create(createJlpmAthDto);
  }
  
  @Get()
  findAll() {
    return this.jlpmAthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jlpmAthService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJlpmAthDto: UpdateJlpmAthDto) {
    return this.jlpmAthService.update(+id, updateJlpmAthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jlpmAthService.remove(+id);
  }
}
