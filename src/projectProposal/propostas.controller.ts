import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PropostasService } from './propostas.service';
import { CreatePropostaDto } from './dto/create-proposta.dto';

@Controller('propostas')
export class PropostasController {
  constructor(private readonly propostasService: PropostasService) {}

  @Post()
  create(@Body() data: CreatePropostaDto) {
    return this.propostasService.create(data);
  }

  @Get()
  findAll() {
    return this.propostasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propostasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<CreatePropostaDto>) {
    return this.propostasService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propostasService.remove(id);
  }
}
