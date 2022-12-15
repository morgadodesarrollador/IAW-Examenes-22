import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JambAuthService } from './jamb-auth.service';
import { CreateJambAuthDto } from './dto/create-jamb-user.dto';
import { UpdateJambAuthDto } from './dto/update-jamb-auth.dto';

@Controller('jamb-auth')
export class JambAuthController {
  constructor(private readonly jambAuthService: JambAuthService) {}

  @Post()
  create(@Body() createJambAuthDto: CreateJambAuthDto) {
    return this.jambAuthService.create(createJambAuthDto);
  }

  @Get()
  findAll() {
    return this.jambAuthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jambAuthService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJambAuthDto: UpdateJambAuthDto) {
    return this.jambAuthService.update(+id, updateJambAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jambAuthService.remove(+id);
  }
}
