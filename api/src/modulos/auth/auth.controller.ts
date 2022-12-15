import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
<<<<<<< HEAD
import { CreateUserDto, UpdateUserDto, LoginUserDto } from './dto/index';
=======
import { CreateUserDto, LoginUserDto } from './dto/index';
>>>>>>> 3dc687912534c171bb39230e473048f0de560050

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

<<<<<<< HEAD
  @Post('register')
=======
  @Post()
>>>>>>> 3dc687912534c171bb39230e473048f0de560050
  create(@Body() createAuthDto: CreateUserDto) {
    return this.authService.create(createAuthDto);
  }

<<<<<<< HEAD
  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateUserDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
=======
  
>>>>>>> 3dc687912534c171bb39230e473048f0de560050
}
