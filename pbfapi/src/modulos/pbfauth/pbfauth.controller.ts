import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PbfauthService } from './pbfauth.service';
import { CreatePbfauthDto } from './dto/create-pbfauth.dto';
import { UpdatePbfauthDto } from './dto/update-pbfauth.dto';

@Controller('pbfauth')
export class PbfauthController {
  constructor(private readonly pbfauthService: PbfauthService) {}

  @Post('pbfregister')
  create(@Body() createPbfauthDto: CreatePbfauthDto) {
    return this.pbfauthService.create(createPbfauthDto);
  }

  @Get()
  findAll() {
    return this.pbfauthService.findAll();
  }

  @Get(':id')
  findOne(@Param('idea') idea: string) {
    return this.pbfauthService.findOne(idea);
  }

  @Patch(':idea')
  update(@Param('idea') idea: string, @Body() updatePbfauthDto: UpdatePbfauthDto) {
    return this.pbfauthService.update(idea, updatePbfauthDto);
  }

  @Delete(':idea')
  remove(@Param('idea') id: string) {
    return this.pbfauthService.remove(id);
  }
}
