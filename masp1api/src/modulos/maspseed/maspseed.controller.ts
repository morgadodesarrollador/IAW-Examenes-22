import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './maspseed.service';

@Controller('maspseed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  excuteSeed() {
    return this.seedService.runData();
  }
}