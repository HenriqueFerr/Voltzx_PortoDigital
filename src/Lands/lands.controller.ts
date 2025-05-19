import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TerrenosService } from './terrenos.service';
import { CreateTerrenoDto } from './dto/create-terreno.dto';

@Controller('terrenos')
export class TerrenosController {
  constructor(private readonly terrenosService: TerrenosService) {}

  @Post()
  create(@Body() data: CreateTerrenoDto) {
    return this.terrenosService.create(data);
  }

  @Get()
  findAll() {
    return this.terrenosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.terrenosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<CreateTerrenoDto>) {
    return this.terrenosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.terrenosService.remove(id);
  }
}

