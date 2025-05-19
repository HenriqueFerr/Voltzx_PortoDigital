import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() data: CreateUsuarioDto) {
    return this.usuariosService.create(data);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<CreateUsuarioDto>) {
    return this.usuariosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(id);
  }
}
