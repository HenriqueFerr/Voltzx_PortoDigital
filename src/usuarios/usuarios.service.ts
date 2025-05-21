import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

const prisma = new PrismaClient();

@Injectable()
export class UsuariosService {
  async create(data: CreateUsuarioDto) {
    return await prisma.usuario.create({ data });
  }

  async findAll() {
    return await prisma.usuario.findMany();
  }

  async findOne(id: string) {
    return await prisma.usuario.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<CreateUsuarioDto>) {
    return await prisma.usuario.update({ where: { id }, data });
  }

  async remove(id: string) {
    return await prisma.usuario.delete({ where: { id } });
  }
}
