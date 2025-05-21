import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OfertasService } from './ofertas.service';
import { CreateOfertaDto } from './dto/create-oferta.dto';

@Controller('ofertas')
export class OfertasController {
  constructor(private readonly ofertasService: OfertasService) {}

  @Post()
  create(@Body() data: CreateOfertaDto) {
    return this.ofertasService.create(data);
  }

  @Get()
  findAll() {
    return this.ofertasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ofertasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<CreateOfertaDto>) {
    return this.ofertasService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ofertasService.remove(id);
  }
}
