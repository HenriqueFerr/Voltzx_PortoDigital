import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProjetosService } from './projetos.service';
import { CreateProjetoDto } from './dto/create-projeto.dto';

@Controller('projetos')
export class ProjetosController {
  constructor(private readonly projetosService: ProjetosService) {}

  @Post()
  create(@Body() data: CreateProjetoDto) {
    return this.projetosService.create(data);
  }

  @Get()
  findAll() {
    return this.projetosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projetosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<CreateProjetoDto>) {
    return this.projetosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projetosService.remove(id);
  }
}

