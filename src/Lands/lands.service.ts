import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LandsService } from './lands.service';
import { CreateLandDto } from './dto/create-land.dto';

@Controller('lands')
export class LandsController {
  constructor(private readonly landsService: LandsService) {}

  @Post()
  create(@Body() data: CreateLandDto) {
    return this.landsService.create(data);
  }

  @Get()
  findAll() {
    return this.landsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.landsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<CreateLandDto>) {
    return this.landsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.landsService.remove(id);
  }
}

